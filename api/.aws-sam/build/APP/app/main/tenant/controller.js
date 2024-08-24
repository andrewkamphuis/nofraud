/* eslint-disable import/extensions */
import CustomError from '../../helpers/error.js';

export const get = async (req, reply) => {
  reply.send({ success: true });
  // const tenant = await TenantManager.get(req.securityObj);
  // reply.send(tenant);
};

export const install = async (req, reply) => {
  reply.send({ success: true });
  // const params = req.body;
  // req.securityObj.tenantId = params.tenantId;
  // delete params.tenantId;
  // delete params.user;

  // validate(validateInstall(params));
  // const tenant = await TenantManager.install(req.securityObj, params);
  // reply.send(tenant);
};

export const uninstall = async (req, reply) => {
  reply.send({ success: true });
  // const params = req.body;
  // req.securityObj.tenantId = params.tenantId;
  // delete params.tenantId;
  // delete params.user;
  // const tenant = await TenantManager.uninstall(req.securityObj);
  // reply.send(tenant);
};

export const update = async (req, reply) => {
  reply.send({ success: true });
  // const params = req.body;
  // validate(validateUpdate(params));
  // const tenant = await TenantManager.update(req.securityObj, params);
  // reply.send(tenant);
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

export * as tenantController from './controller';
