import {
  OrderSync,
  OrderSyncAttempt,
  OrderSyncAttemptError
} from '../../../models.js';
import CustomError from '../../helpers/error.js';

import { includeArray } from './gateway.js';

export const get = async (securityObj, id) => {
  const orderSync = await OrderSync.findOne({
    where: { tenantId: securityObj.tenantId, id },
    include: includeArray(),
    order: orderArray()
  });

  if (!orderSync) {
    throw new CustomError(404, 'Order Sync does not exist', 'notFound');
  }

  return orderSync.toJSON();
};

export const create = async (securityObj, params) => {
  params.tenantId = securityObj.tenantId;
  if (params.attempts) {
    params.attempts = params.attempts.map((item) => {
      const newItem = item;
      newItem.tenantId = securityObj.tenantId;
      if (newItem.errors) {
        newItem.errors = newItem.errors.map((error) => {
          const newError = error;
          newError.tenantId = securityObj.tenantId;
          return newError;
        });
      }
      return newItem;
    });
  }
  await OrderSync.create(params, {
    include: includeCreateArray()
  });
  const orderSync = await get(securityObj, params.id);
  return orderSync;
};

export const createAttempt = async (securityObj, params) => {
  params.tenantId = securityObj.tenantId;
  if (params.errors) {
    params.errors = params.errors.map((error) => {
      const newError = error;
      newError.tenantId = securityObj.tenantId;
      return newError;
    });
  }
  await OrderSyncAttempt.create(params, {
    include: { model: OrderSyncAttemptError, as: 'errors' }
  });
  const orderSync = await get(securityObj, params.orderSyncId);
  return orderSync;
};

export const update = async (securityObj, id, params) => {
  let orderSync = await OrderSync.findOne({
    where: { tenantId: securityObj.tenantId, id }
  });
  orderSync = Object.assign(orderSync, params);
  await orderSync.save();

  orderSync = await get(securityObj, id);
  return orderSync;
};

const orderArray = () => {
  const array = [['attempts', 'attemptDate', 'desc']];
  return array;
};

const includeCreateArray = () => {
  const array = [
    {
      model: OrderSyncAttempt,
      as: 'attempts',
      include: { model: OrderSyncAttemptError, as: 'errors' }
    }
  ];

  return array;
};

export * as DAO from './dao';
