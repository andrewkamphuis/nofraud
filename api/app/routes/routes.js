import { orderSyncController } from '../main/orderSync/controller';
import { scheduledTaskController } from '../main/scheduledTask/controller';
import { tenantController } from '../main/tenant/controller';

import { roleCheck } from './security';

const routes = (fastify, _options, done) => {
  fastify.get('/', (_request, reply) => {
    reply.send({ App: 'NoFraud Integration App API - v2' });
  });

  /* sync */
  fastify.get('/beta/order-sync/:orderId', route(orderSyncController.get));
  fastify.put('/beta/order-sync/:orderId', route(orderSyncController.sync));
  fastify.put(
    '/beta/order-sync/:orderId/void',
    route(orderSyncController.voidSync)
  );
  fastify.put(
    '/beta/order-sync/:orderId/not-required',
    route(orderSyncController.notRequired)
  );
  fastify.post('/beta/order-sync/webhook', route(orderSyncController.webhook));

  /* tenant - install, uninstall, update */
  fastify.get('/beta/tenant', route(tenantController.get));
  fastify.put('/beta/tenant', route(tenantController.update));
  fastify.post('/beta/tenant', route(tenantController.install));
  fastify.post('/beta/tenant/uninstall', route(tenantController.uninstall));

  /* scheduled tasks */
  fastify.get('/beta/scheduled-task/sync', route(scheduledTaskController.sync));
  fastify.get(
    '/beta/scheduled-task/monitor',
    route(scheduledTaskController.monitor)
  );

  done();
};

const route = (controllerFn, authType, role, appRole, customFunction) => {
  const options = {
    handler: (request, reply) =>
      roleCheck(controllerFn, request, reply, role, appRole, customFunction),
    onRequest: authType
  };
  return options;
};

export default routes;
