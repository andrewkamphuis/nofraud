import cors from '@fastify/cors';
import env from 'dotenv';
import Fastify from 'fastify';

import * as apiError from './app/helpers/apiError';
import routes from './app/routes/routes';

env.config({ path: './.env' });

export const fastify = Fastify({
  logger: {
    transport:
      process.env.NODE_ENV === 'development'
        ? {
            target: 'pino-pretty',
            options: {
              translateTime: 'HH:MM:ss Z',
              ignore: 'pid,hostname'
            }
          }
        : undefined
  },
  ignoreTrailingSlash: true
});

export const build = () => {
  const app = fastify.register(routes);
  // TODO, only allow CORS in development?
  app.register(cors, {
    origin: true
  });
  fastify.setErrorHandler(async (error, request, reply) => {
    if (process.env.NODE_ENV !== 'production') {
      // eslint-disable-next-line no-console
      console.log(error);
    }
    if (
      process.env.NODE_ENV === 'production' &&
      ![401, 402, 404, 422].includes(error.statusCode)
    ) {
      // TODO handle errors in production
      // await rollbar.error(error);
    }
    const response = apiError.apiError(error, request);
    // Send error response
    reply.status(response.statusCode).send(response.apiError);
  });
  return app;
};
