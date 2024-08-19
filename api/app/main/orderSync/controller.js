import { OrderSyncManager } from './manager';

export const get = async (req, reply) => {
  const orderSync = await OrderSyncManager.get(
    req.securityObj,
    req.params.orderId
  );
  reply.send(orderSync);
};

export const sync = async (req, reply) => {
  const orderSync = await OrderSyncManager.sync(
    req.securityObj,
    req.params.orderId
  );
  reply.send(orderSync);
};

export const voidSync = async (req, reply) => {
  const orderSync = await OrderSyncManager.voidSync(
    req.securityObj,
    req.params.orderId
  );
  reply.send(orderSync);
};

export const notRequired = async (req, reply) => {
  const orderSync = await OrderSyncManager.notRequired(
    req.securityObj,
    req.params.orderId
  );
  reply.send(orderSync);
};

export const webhook = async (req, reply) => {
  const params = req.body;
  await OrderSyncManager.webhook(params);
  reply.send({ isSuccess: true });
};

export * as orderSyncController from './controller';
