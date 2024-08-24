/* eslint-disable import/extensions */
import { orderSyncController } from '../main/orderSync/controller.js';

// eslint-disable-next-line import/prefer-default-export
export const urlSwitch = async (path, body) => {
  console.log('---------------------urlSwitch', path, body);
  let message;
  if (body) {
    const messageBody = Buffer.from(body, 'base64').toString('utf8');
    message = JSON.parse(messageBody);
  }

  const reply = (results) => {
    const response = {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-type': 'application/json'
      },
      body: JSON.stringify(results),
      isBase64Encoded: false
    };
    console.log('-------response', response);
    return response;
  };

  switch (path) {
    case '/beta/favicon.ico':
    case '/beta/default': {
      return reply({ App: 'NoFraud Integration App API - v2' });
    }
    case '/beta/order-sync/webhook': {
      const response = await orderSyncController.webhook(message);
      return reply(response);
    }
    default:
      throw new Error(`Invalid path: ${path}.`);
  }
};

// const routes = (fastify, _options, done) => {
//   /* sync */
//   fastify.get('/beta/order-sync/:orderId', route(orderSyncController.get));
//   fastify.put('/beta/order-sync/:orderId', route(orderSyncController.sync));
//   fastify.put(
//     '/beta/order-sync/:orderId/void',
//     route(orderSyncController.voidSync)
//   );
//   fastify.put(
//     '/beta/order-sync/:orderId/not-required',
//     route(orderSyncController.notRequired)
//   );
//   fastify.post('/beta/order-sync/webhook', route(orderSyncController.webhook));

//   /* tenant - install, uninstall, update */
//   fastify.get('/beta/tenant', route(tenantController.get));
//   fastify.put('/beta/tenant', route(tenantController.update));
//   fastify.post('/beta/tenant', route(tenantController.install));
//   fastify.post('/beta/tenant/uninstall', route(tenantController.uninstall));

//   /* scheduled tasks */
//   fastify.get('/beta/scheduled-task/sync', route(scheduledTaskController.sync));
//   fastify.get(
//     '/beta/scheduled-task/monitor',
//     route(scheduledTaskController.monitor)
//   );

//   done();
// };

// const route = (controllerFn, authType, role, appRole, customFunction) => {
//   const options = {
//     handler: (request, reply) =>
//       roleCheck(controllerFn, request, reply, role, appRole, customFunction),
//     onRequest: authType
//   };
//   return options;
// };

// export default routes;
