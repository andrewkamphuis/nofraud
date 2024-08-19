import { build, fastify } from './app.js';

const start = async () => {
  try {
    await build();
    await fastify.listen({
      port: process.env.APP_PORT || 3000,
      host: '0.0.0.0'
    });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
