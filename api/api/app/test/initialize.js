import env from 'dotenv';

env.config({ path: '../../.env', override: true });
process.env.NODE_ENV = 'test';
