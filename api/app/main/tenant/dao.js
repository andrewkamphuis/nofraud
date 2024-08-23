import { Tenant } from '../../../models.js';
import CustomError from '../../helpers/error.js';

export const get = async (id) => {
  const tenant = await Tenant.findOne({
    where: { id }
  });

  if (!tenant) {
    throw new CustomError(404, 'Tenant does not exist', 'notFound');
  }

  return tenant.toJSON();
};

// export const getWithSensitiveVariables = async (id) => {
//   const tenant = await Tenant.findOne({
//     where: { id }
//   });

//   if (!tenant) {
//     throw new CustomError(404, 'Tenant does not exist', 'notFound');
//   }

//   const response = tenant.toJSON();
//   response.noFraudPassword = tenant.noFraudPassword;

//   return response;
// };

export const create = async (params) => {
  await Tenant.create(params);
  const tenant = await get(params.id);

  return tenant;
};

export const update = async (id, params) => {
  let tenant = await Tenant.findOne({
    where: { id }
  });
  if (!tenant) {
    throw new CustomError(404, 'Tenant does not exist', 'notFound');
  }
  tenant = Object.assign(tenant, params);
  await tenant.save();

  tenant = await get(id);
  return tenant;
};

export const deleteObj = async (id) => {
  await Tenant.destroy({
    where: {
      id
    }
  });
};

export * as DAO from './dao';
