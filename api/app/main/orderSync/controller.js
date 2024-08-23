export const get = async (req) => {
  const response = { success: true };
  return response;
  // const orderSync = await OrderSyncManager.get(
  //   req.securityObj,
  //   req.params.orderId
  // );
  // reply.send(orderSync);
};

export const create = async (req) => {
  const response = { success: true };
  return response;
  // const orderSync = await OrderSyncManager.sync(
  //   req.securityObj,
  //   req.params.orderId
  // );
  // reply.send(orderSync);
};

export const checkStatus = async (req) => {
  const response = { success: true };
  return response;
  // const orderSync = await OrderSyncManager.voidSync(
  //   req.securityObj,
  //   req.params.orderId
  // );
  // reply.send(orderSync);
};

export const cancelAtNoFraud = async (req) => {
  const response = { success: true };
  return response;
  // const orderSync = await OrderSyncManager.notRequired(
  //   req.securityObj,
  //   req.params.orderId
  // );
  // reply.send(orderSync);
};

export const webhook = async (req) => {
  const response = { success: true };
  return response;
  // const params = req.body;
  // await OrderSyncManager.webhook(params);
  // reply.send({ isSuccess: true });
};

export * as orderSyncController from './controller.js';
