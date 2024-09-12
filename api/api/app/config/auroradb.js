import env from 'dotenv';
// eslint-disable-next-line import/no-extraneous-dependencies
// import pg from 'pg';
import Sequelize from 'sequelize';

env.config({ path: '../.env' });

const retryConfig = {
  match: [
    Sequelize.ConnectionError,
    Sequelize.ConnectionTimedOutError,
    Sequelize.TimeoutError
  ],
  backoffBase: 1000,
  backoffExponent: 1.5,
  max: 3
};

const retryConfigTest = {
  match: [
    Sequelize.ConnectionError,
    Sequelize.ConnectionTimedOutError,
    Sequelize.TimeoutError,
    /Deadlock/i
  ],
  backoffBase: 1000,
  backoffExponent: 1.5,
  max: 3
};

const config = {
  development: {
    databases: {
      writerDatabase: {
        database: process.env.DB_NAME,
        dialect: 'mysql',
        dialectOptions: {
          decimalNumbers: true,
          charset: 'utf8mb4',
          multipleStatements: true
        },
        logging: true,
        host: process.env.DB_WRITER_HOST,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        port: process.env.DB_PORT,
        retry: retryConfig
      },
      readerDatabase: {
        database: process.env.DB_NAME,
        dialect: 'mysql',
        dialectOptions: {
          decimalNumbers: true,
          charset: 'utf8mb4'
        },
        logging: true,
        host: process.env.DB_READER_HOST,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        port: process.env.DB_PORT,
        retry: retryConfig
      }
    }
  },
  test: {
    databases: {
      writerDatabase: {
        database: process.env.DB_NAME,
        dialect: 'mysql',
        dialectOptions: {
          decimalNumbers: true,
          charset: 'utf8mb4'
        },

        logging: false,
        host: process.env.DB_WRITER_HOST,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        port: process.env.DB_PORT,
        retry: retryConfigTest
      },
      readerDatabase: {
        database: process.env.DB_NAME,
        dialect: 'mysql',
        dialectOptions: {
          decimalNumbers: true,
          charset: 'utf8mb4'
        },

        logging: false,
        host: process.env.DB_READER_HOST,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        port: process.env.DB_PORT,
        retry: retryConfigTest
      }
    }
  },
  testFull: {
    databases: {
      writerDatabase: {
        database: process.env.DB_NAME,
        dialect: 'mysql',
        dialectOptions: {
          decimalNumbers: true,
          charset: 'utf8mb4'
        },

        logging: false,
        host: process.env.DB_WRITER_HOST,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        pool: {
          min: 1,
          max: 1,
          handleDisconnects: true,
          acquire: 10000,
          testOnBorrow: true
        },
        port: process.env.DB_PORT,
        retry: retryConfigTest
      },
      readerDatabase: {
        database: process.env.DB_NAME,
        dialect: 'mysql',
        dialectOptions: {
          decimalNumbers: true,
          charset: 'utf8mb4'
        },

        logging: false,
        host: process.env.DB_READER_HOST,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        pool: {
          min: 1,
          max: 1,
          handleDisconnects: true,
          acquire: 10000,
          testOnBorrow: true
        },
        port: process.env.DB_PORT,
        retry: retryConfigTest
      }
    }
  },
  production: {
    databases: {
      writerDatabase: {
        database: process.env.DB_NAME,
        dialect: 'mysql',
        dialectOptions: {
          decimalNumbers: true,
          charset: 'utf8mb4',
          multipleStatements: false
        },
        logging: false,
        host: process.env.DB_WRITER_HOST,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        port: process.env.DB_PORT,
        retry: retryConfig
      },
      readerDatabase: {
        database: process.env.DB_NAME,
        dialect: 'mysql',
        dialectOptions: {
          decimalNumbers: true,
          charset: 'utf8mb4',
          multipleStatements: false
        },
        logging: false,
        host: process.env.DB_READER_HOST,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        retry: retryConfig
      }
    }
  }
};

export default config;
