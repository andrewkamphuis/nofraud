import CustomError from '../../helpers/error';
import { OrderSyncManager } from '../orderSync/manager';
import { ScheduledTaskManager } from '../scheduledTask/manager';

export const processConsumedMessage = async (message) => {
  switch (message.messageType) {
    case 'orderSync': {
      await OrderSyncManager[message.messageAction](message);
      break;
    }
    case 'scheduledTask': {
      await ScheduledTaskManager[message.messageAction](message);
      break;
    }

    default:
      throw new CustomError(
        500,
        `Invalid Message Type to SQS ProcessConsumedMessage: ${message.messageType}`,
        'processingError'
      );
  }
};

export * as SQSManager from './manager';
