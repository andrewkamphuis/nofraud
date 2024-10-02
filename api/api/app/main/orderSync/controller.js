import { OrderSyncManager } from './manager.js';

export const get = async (req) => {
  const orderSync = await OrderSyncManager.get(
    req.securityObj,
    req.params.orderId
  );
  return orderSync;
};

export const create = async (req) => {
  const orderSync = await OrderSyncManager.sync(
    req.securityObj,
    req.params.orderId
  );
  return orderSync;
};

export const checkStatus = async (req) => {
  const orderSync = await OrderSyncManager.checkStatus(
    req.securityObj,
    req.params.orderId
  );
  return orderSync;
};

export const cancelAtNoFraud = async (req) => {
  const orderSync = await OrderSyncManager.cancelAtNoFraud(
    req.securityObj,
    req.params.orderId
  );
  return orderSync;
};

export const webhook = async (req) => {
  const params = req.body;
  await OrderSyncManager.webhook(params);
  return { isSuccess: true };
};

export const fraudStatusWebhook = async (req) => {
  const params = req.body;
  const { noFraudApiKey } = req.params;
  await OrderSyncManager.fraudStatusWebhook(noFraudApiKey, params);
  return { isSuccess: true };
};

export * as orderSyncController from './controller.js';
