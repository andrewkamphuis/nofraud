/* eslint-disable max-len */
import { DataTypes, Sequelize } from 'sequelize';
import sequelizeTransforms from 'sequelize-transforms';

import config from './app/config/auroradb.js';
import orderSync from './app/main/orderSync/model/orderSync.js';
import orderSyncAttempt from './app/main/orderSync/model/orderSyncAttempt.js';
import orderSyncAttemptError from './app/main/orderSync/model/orderSyncAttemptError.js';
import tenant from './app/main/tenant/model/tenant';

const { writerDatabase, readerDatabase, globalDatabase, analyticDatabase } =
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

let sequelizeAnalyticDatabase;
try {
  sequelizeAnalyticDatabase = new Sequelize(
    analyticDatabase.database,
    analyticDatabase.username,
    analyticDatabase.password,
    analyticDatabase
  );
  sequelizeTransforms(sequelizeAnalytic);
} catch (err) {
  // fail silently
}
export const sequelizeAnalytic = sequelizeAnalyticDatabase;

let globalDb;
if (process.env.NODE_ENV === 'test' || process.env.NODE_ENV === 'testFull') {
  globalDb = new Sequelize(
    globalDatabase.database,
    globalDatabase.username,
    globalDatabase.password,
    globalDatabase
  );
  sequelizeTransforms(globalDb);
}

export const sequelizeGlobal = globalDb;

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
