/* eslint-disable import/prefer-default-export */
/* eslint-disable max-len */

import env from 'dotenv';

import { urlSwitch } from './app/routes/routes.js';
import { OrderSyncManager as orderSync } from './app/main/orderSync/manager.js'

env.config({ path: './.env' });

export const app = async (message) => {
  // eslint-disable-next-line no-useless-catch
  try {
    if (message.resource) {
      const results = await urlSwitch(message);
      return results;
    }
    if (message.Records) {
      const source = message.Records[0].eventSource;
      switch (source) {
        case 'aws:sqs': {
          const results = await sqsSwitch(JSON.parse(message.Records[0].body));
          return results;
        }
        default:
          throw Error('Invalid Source');
      }
    }
    throw Error('No idea where this came from');
  } catch (err) {
    throw err;
  }
};

const sqsSwitch = async (message) => {
  switch (message.messageType) {
    case 'orderSync': {
      await orderSync[message.messageAction](message);
      break;
    }
    default:
      throw Error('Invalid Message Type');
  }
};
