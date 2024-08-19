import { SQSClient } from '@aws-sdk/client-sqs';
import { fromNodeProviderChain } from '@aws-sdk/credential-providers';
// import newrelic from 'newrelic';
import { Consumer } from 'sqs-consumer';

import { SQSManager } from './app/main/sqs/manager';

let errorCount = 0;

const ignoreMessages = () => {
  const messages = ['Webhook Issue'];
  return messages;
};

const app = Consumer.create({
  queueUrl: process.env.SQS_FIFO_URL,
  handleMessage: async (message) => {
    // TODO get newrelic running with ES6
    // const results = JSON.parse(message.Body);
    // const transactionName = `sqs - ${results.messageType}.${results.messageAction}`;
    // await newrelic.startBackgroundTransaction(transactionName, () =>
    //   processMessage(message)
    // );
    await processMessage(message);
  },
  sqs: new SQSClient(fromNodeProviderChain())
});

const processMessage = async (message) => {
  const results = JSON.parse(message.Body);
  try {
    // eslint-disable-next-line import/no-named-as-default-member
    await SQSManager.processConsumedMessage(results);
  } catch (err) {
    if (
      process.env.NODE_ENV === 'production' &&
      !ignoreMessages().includes(err.message)
    ) {
      // eslint-disable-next-line no-console
      console.log(err, message);
    }
    errorCount += 1;
    // eslint-disable-next-line no-console
    console.log(err, errorCount);
  }
  return Promise.resolve();
};

app.on('error', (err) => {
  if (process.env.NODE_ENV === 'production') {
    // eslint-disable-next-line no-console
    console.log(err);
  }
  // eslint-disable-next-line no-console
  console.log(err.message);
});

process.on('SIGTERM', () => {
  app.stop(() => {
    process.exit(0);
  });
});

app.start();
