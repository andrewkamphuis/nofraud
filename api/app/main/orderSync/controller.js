import CustomError from '../../helpers/error.js';

import { OrderSyncManager } from './manager.js';
import { validateCancel } from './validator.js';

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
  const params = req.body;
  validate(validateCancel(params));

  const orderSync = await OrderSyncManager.cancelAtNoFraud(
    req.securityObj,
    req.params.orderId,
    params
  );
  return orderSync;
};

export const webhook = async (req) => {
  const params = req.body;
  await OrderSyncManager.webhook(params);
  return { isSuccess: true };
};

const validate = (resultsArray) => {
  if (resultsArray.length !== 0) {
    throw new CustomError(
      422,
      'One or more elements is missing or invalid',
      'validationError',
      resultsArray
    );
  }
};

export * as orderSyncController from './controller.js';
