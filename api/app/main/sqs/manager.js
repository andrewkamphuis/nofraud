import CustomError from '../../helpers/error.js';
import { OrderSyncManager } from '../orderSync/manager.js';
import { ScheduledTaskManager } from '../scheduledTask/manager.js';

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

export * as SQSManager from './manager.js';
