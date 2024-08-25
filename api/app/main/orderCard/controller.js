import { OrderCardManager } from './manager';

export const get = async (req) => {
  // incoming variables are tenantId, orderId, and account
  const orderCard = await OrderCardManager.get(
    req.query.tenantId,
    req.query.orderId
  );
  return orderCard;
};

export * as orderCardController from './controller';
