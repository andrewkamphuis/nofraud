/* eslint-disable import/extensions */
import {
  SQSClient,
  SendMessageBatchCommand,
  SendMessageCommand
} from '@aws-sdk/client-sqs';
import { fromNodeProviderChain } from '@aws-sdk/credential-providers';

import { SQSManager } from '../main/sqs/manager.js';

const sqs = new SQSClient(fromNodeProviderChain());

// eslint-disable-next-line import/prefer-default-export
export const sendToFifoQueue = async (type, action, message) => {
  const newMessage = message;
  let response;
  newMessage.messageType = type;
  newMessage.messageAction = action;
  const params = {
    MessageBody: JSON.stringify(newMessage),
    QueueUrl: process.env.SQS_FIFO_URL,
    DelaySeconds: 0,
    MessageGroupId: message.messageId,
    MessageDeduplicationId: message.messageId
  };
  if (process.env.SQS_IS_ENABLED === 'true') {
    response = await sendToQueueWithTimeout(params);
  } else {
    // flip message to stringify and back so that we get rid of javascript dates, etc in favor of strings
    message = JSON.stringify(message);
    message = JSON.parse(message);
    await SQSManager.processConsumedMessage(message);
  }
  return response;
};

const sendToQueueWithTimeout = async (
  params,
  timeout = 1000,
  sendCount = 1
) => {
  if (sendCount >= 5) {
    const tooManyAttemptsErr = new Error(
      'sendToQueueWithTimeout tried running 5 times, halting'
    );
    if (process.env.NODE_ENV === 'production') {
      // Log to failed-receives queue to see if we can hit SQS at all in these scenarios
      const failedParams = {
        MessageBody: JSON.stringify(params),
        QueueUrl:
          'https://sqs.us-west-2.amazonaws.com/122024267476/commerce7-lambda-queue-failed-receives',
        DelaySeconds: 0
      };
      const sqsMessage = new SendMessageCommand(failedParams);
      await sqs.send(sqsMessage);
    }
    throw tooManyAttemptsErr;
  }

  try {
    let sqsMessage;
    if (params.Entries) {
      sqsMessage = new SendMessageBatchCommand(params);
      await Promise.race([sqs.send(sqsMessage), createTimeout(timeout)]);
    } else {
      sqsMessage = new SendMessageCommand(params);
      await Promise.race([sqs.send(sqsMessage), createTimeout(timeout)]);
    }
  } catch (err) {
    if (err.message === 'Request timed out') {
      const newCount = sendCount + 1;
      const newTimeout = timeout * 2;
      await sendToQueueWithTimeout(params, newTimeout, newCount);
    } else {
      throw err;
    }
  }
};

const createTimeout = (duration = 1000) =>
  new Promise((_, reject) =>
    // eslint-disable-next-line no-promise-executor-return
    setTimeout(() => reject(new Error('Request timed out')), duration)
  );
