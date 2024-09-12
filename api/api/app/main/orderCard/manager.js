import { OrderSyncManager } from '../orderSync/manager.js';

export const get = async (tenantId, orderId) => {
  const response = {
    icon: 'https://nofraud.tinygrape.co/NoFraud Bubble.png',
    subTitle: 'NOFRAUD',
    footer: ''
  };

  let orderSync;
  try {
    orderSync = await OrderSyncManager.get({ tenantId }, orderId);
  } catch (err) {
    if (err.statusCode === 404) {
      response.title = 'Not Sent';
      response.variant = 'error';
      return response;
    }
    throw err;
  }

  response.title = orderSync.type;

  switch (orderSync.type) {
    case 'Pass':
      response.variant = null;
      break;
    case 'Needs Review':
      response.variant = 'warning';
      break;
    case 'Fail':
      response.variant = 'error';
      break;
    case 'Not Required':
    case 'Cancelled':
      response.variant = null;
      break;
    default:
      throw new Error('Unknown orderSync type');
  }
  // variant="warning", error,
  return response;
};

export * as OrderCardManager from './manager.js';
