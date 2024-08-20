/* eslint-disable import/extensions */
export const get = async (req, reply) => {
  reply.send({ success: true });
  // const orderSync = await OrderSyncManager.get(
  //   req.securityObj,
  //   req.params.orderId
  // );
  // reply.send(orderSync);
};

export const sync = async (req, reply) => {
  reply.send({ success: true });
  // const orderSync = await OrderSyncManager.sync(
  //   req.securityObj,
  //   req.params.orderId
  // );
  // reply.send(orderSync);
};

export const voidSync = async (req, reply) => {
  reply.send({ success: true });
  // const orderSync = await OrderSyncManager.voidSync(
  //   req.securityObj,
  //   req.params.orderId
  // );
  // reply.send(orderSync);
};

export const notRequired = async (req, reply) => {
  reply.send({ success: true });
  // const orderSync = await OrderSyncManager.notRequired(
  //   req.securityObj,
  //   req.params.orderId
  // );
  // reply.send(orderSync);
};

export const webhook = async (req, reply) => {
  console.log(reply);
  const response = { success: true };
  return response;
  // const params = req.body;
  // await OrderSyncManager.webhook(params);
  // reply.send({ isSuccess: true });
};

export * as orderSyncController from './controller.js';
