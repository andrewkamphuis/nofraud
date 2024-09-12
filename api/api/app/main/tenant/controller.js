import CustomError from '../../helpers/error.js';

import { TenantManager } from './manager.js';
import { validateInstall, validateUpdate } from './validator.js';

export const get = async (req) => {
  const tenant = await TenantManager.get(req.securityObj);
  return tenant;
};

export const install = async (req) => {
  const params = req.body;
  req.securityObj.tenantId = params.tenantId;
  delete params.tenantId;
  delete params.user;

  validate(validateInstall(params));
  const tenant = await TenantManager.install(req.securityObj, params);
  return tenant;
};

export const uninstall = async (req) => {
  const params = req.body;
  req.securityObj.tenantId = params.tenantId;
  delete params.tenantId;
  delete params.user;
  const tenant = await TenantManager.uninstall(req.securityObj);
  return tenant;
};

export const update = async (req) => {
  const params = req.body;
  validate(validateUpdate(params));
  const tenant = await TenantManager.update(req.securityObj, params);
  return tenant;
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

export * as tenantController from './controller.js';
