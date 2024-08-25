// import Sequelize from 'sequelize';

import {
  OrderSync,
  OrderSyncAttempt,
  OrderSyncAttemptError
} from '../../../models.js';

// export const listForIds = async (securityObj, ids) => {
//   const op = Sequelize.Op;

//   const orderSyncs = await OrderSync.findAll({
//     where: {
//       tenantId: securityObj.tenantId,
//       id: {
//         [op.in]: ids
//       }
//     }
//   });
//   return orderSyncs;
// };

export const deleteAll = async (securityObj) => {
  await OrderSync.destroy({
    where: { tenantId: securityObj.tenantId }
  });
};

export const includeArray = () => {
  const array = [
    {
      model: OrderSyncAttempt,
      as: 'attempts',
      include: { model: OrderSyncAttemptError, as: 'errors' }
    }
  ];

  return array;
};

export * as Gateway from './gateway';
