/* eslint-disable max-len */
import { DataTypes, Sequelize } from 'sequelize';
import sequelizeTransforms from 'sequelize-transforms';

import config from './app/config/auroradb.js';
import orderSync from './app/main/orderSync/model/orderSync.js';
import orderSyncAttempt from './app/main/orderSync/model/orderSyncAttempt.js';
import orderSyncAttemptError from './app/main/orderSync/model/orderSyncAttemptError.js';
import tenant from './app/main/tenant/model/tenant.js';

const { writerDatabase, readerDatabase } =
  config[process.env.NODE_ENV].databases;

export const sequelize = new Sequelize(
  writerDatabase.database,
  writerDatabase.username,
  writerDatabase.password,
  writerDatabase
);
sequelizeTransforms(sequelize);
export const sequelizeReader = new Sequelize(
  readerDatabase.database,
  readerDatabase.username,
  readerDatabase.password,
  readerDatabase
);
sequelizeTransforms(sequelizeReader);

const Models = {
  OrderSync: orderSync(sequelize, DataTypes),
  OrderSyncAttempt: orderSyncAttempt(sequelize, DataTypes),
  OrderSyncAttemptError: orderSyncAttemptError(sequelize, DataTypes),
  Tenant: tenant(sequelize, DataTypes)
};

Object.keys(Models).forEach((modelName) => {
  if (Models[modelName].associate) {
    Models[modelName].associate(Models);
  }
});

export const { OrderSync, OrderSyncAttempt, OrderSyncAttemptError, Tenant } =
  Models;

export default Models;
