import { expect } from 'chai';
// import nock from 'nock';
// import '../../../test/common';

import app from '../../../../app.js';
// import { OrderSyncManager } from '../manager';

// import { success } from './noFraudSamples';
import { c7Order, webhook } from './sample';

describe('orderSync.api.test.js - Order Sync beta API', () => {
  const local = {
    orderId: ''
  };

  // before(() => {
  //   if (process.env.NODE_ENV !== 'testFull') {
  //     nock(process.env.C7_API_URL)
  //       .get(/\/v1\/order\/.*/)
  //       .reply(200, c7Order())
  //       .persist();
  //     nock(process.env.VINOSHIPPER_API_URL)
  //       .post(`/api/v3/p/orders`)
  //       .reply(200, success())
  //       .persist();
  //     nock(process.env.VINOSHIPPER_API_URL)
  //       .post(/^\/api\/v3\/p\/orders\/.+\/cancel/)
  //       .reply(200, success())
  //       .persist();
  //   }
  // });

  // beforeEach(async () => {
  //   const now = new Date();
  //   const yesterday = new Date();
  //   yesterday.setDate(yesterday.getDate() - 1);
  //   const params = {
  //     lastSyncAttemptDate: now.toISOString(),
  //     type: 'Failed To Send',
  //     attempts: [
  //       {
  //         attemptDate: now.toISOString(),
  //         type: 'Failed To Send',
  //         errors: [
  //           { code: '1234', message: 'State Code Doesnt Exist' },
  //           { code: '1234', message: 'State Code Doesnt Exist' }
  //         ]
  //       },
  //       {
  //         attemptDate: yesterday.toISOString(),
  //         type: 'Failed To Send'
  //       }
  //     ]
  //   };
  //   const orderSync = await OrderSyncManager.create(global.securityObj, params);
  //   local.orderId = orderSync.id;
  // });

  // afterEach(async () => {
  //   await OrderSyncManager.deleteAll(global.securityObj);
  // });

  // after(() => {
  //   nock.cleanAll();
  // });

  it.only('should test the base route', async () => {
    const message = {
      resource: '/',
      path: '/',
      httpMethod: 'POST',
      queryStringParameters: null,
      multiValueQueryStringParameters: null,
      pathParameters: null,
      stageVariables: null,
      body: Buffer.from(JSON.stringify({ hello: 'hello' })).toString('base64'),
      isBase64Encoded: true
    };

    const response = await app(message);
    console.log(response, '1-----');

    // const response = await app.inject({
    //   method: 'GET',
    //   url: `/beta/order-sync/${local.orderId}`,
    //   headers: global.headers
    // });
    // expect(response.statusCode).to.equal(200);
    // const payload = response.json();
    // expect(payload.type).to.equal('Failed To Send');
    // expect(payload.attempts.length).to.equal(2);
    // expect(payload.attempts[0].errors.length).to.equal(2);
  });

  it.only('should test the base route', async () => {
    const message = {
      resource: '/beta/order-sync/webhook',
      path: '/beta/order-sync/webhook',
      httpMethod: 'POST',
      queryStringParameters: null,
      multiValueQueryStringParameters: null,
      pathParameters: null,
      stageVariables: null,
      body: Buffer.from(JSON.stringify({ hello: 'hello' })).toString('base64'),
      isBase64Encoded: true
    };

    const response = await app(message);
    console.log(response, '2-----');
    // const response = await app.inject({
    //   method: 'GET',
    //   url: `/beta/order-sync/${local.orderId}`,
    //   headers: global.headers
    // });
    // expect(response.statusCode).to.equal(200);
    // const payload = response.json();
    // expect(payload.type).to.equal('Failed To Send');
    // expect(payload.attempts.length).to.equal(2);
    // expect(payload.attempts[0].errors.length).to.equal(2);
  });

  it('should list ALL syncs on /order-sync/:orderId GET', async () => {
    const response = await app.inject({
      method: 'GET',
      url: `/beta/order-sync/${local.orderId}`,
      headers: global.headers
    });
    expect(response.statusCode).to.equal(200);
    const payload = response.json();
    expect(payload.type).to.equal('Failed To Send');
    expect(payload.attempts.length).to.equal(2);
    expect(payload.attempts[0].errors.length).to.equal(2);
  });

  it('should update an order sync to NoFraud /order-sync/:orderId PUT', async () => {
    const response = await app.inject({
      method: 'PUT',
      url: `/beta/order-sync/${local.orderId}`,
      headers: global.headers
    });
    expect(response.statusCode).to.equal(200);
    const payload = response.json();
    expect(payload.type).to.equal('Sent To NoFraud');
  });

  it('should error on pickup order', async () => {
    const order = c7Order();
    const pickupOrder = structuredClone(order);
    pickupOrder.orderDeliveryMethod = 'Pickup';
    const response = await OrderSyncManager.attemptSyncInTest(
      global.securityObj,
      pickupOrder
    );
    expect(response.type).to.equal('Not Required To Send');
  });

  it('should error on non-country order', async () => {
    const order = c7Order();
    const pickupOrder = structuredClone(order);
    pickupOrder.shipTo.countryCode = 'CA';
    const response = await OrderSyncManager.attemptSyncInTest(
      global.securityObj,
      pickupOrder
    );
    expect(response.type).to.equal('Not Required To Send');
  });

  it('should error on non-state order', async () => {
    const order = c7Order();
    const pickupOrder = structuredClone(order);
    pickupOrder.shipTo.stateCode = 'CA';
    const response = await OrderSyncManager.attemptSyncInTest(
      global.securityObj,
      pickupOrder
    );
    expect(response.type).to.equal('Not Required To Send');
  });

  it('should create an order sync to NoFraud /order-sync/:orderId PUT', async () => {
    const response = await app.inject({
      method: 'PUT',
      url: `/beta/order-sync/1234`,
      headers: global.headers
    });
    expect(response.statusCode).to.equal(200);
    const payload = response.json();
    expect(payload.type).to.equal('Sent To NoFraud');
    expect(payload.attempts.length).to.equal(1);
    expect(payload.attempts[0].errors.length).to.equal(0);
  });

  it('should void a sync /order-sync/:orderId/void PUT', async () => {
    const response = await app.inject({
      method: 'PUT',
      url: `/beta/order-sync/${local.orderId}/void`,
      headers: global.headers
    });
    expect(response.statusCode).to.equal(200);
    const payload = response.json();
    expect(payload.type).to.equal('Voided In NoFraud');
    expect(payload.attempts.length).to.equal(3);
    expect(payload.attempts[0].errors.length).to.equal(0);
  });

  it('should mark a sync not required /order-sync/:orderId/not-required PUT', async () => {
    const response = await app.inject({
      method: 'PUT',
      url: `/beta/order-sync/${local.orderId}/not-required`,
      headers: global.headers
    });
    expect(response.statusCode).to.equal(200);
    const payload = response.json();
    expect(payload.type).to.equal('Not Required To Send');
    expect(payload.attempts.length).to.equal(3);
    expect(payload.attempts[0].errors.length).to.equal(0);
  });

  it('should listen for a webhook /order-sync/webhook PUT', async () => {
    let response = await app.inject({
      method: 'POST',
      url: `/beta/order-sync/webhook`,
      payload: webhook(),
      headers: global.headers
    });
    expect(response.statusCode).to.equal(200);
    let payload = response.json();
    expect(payload.isSuccess).to.equal(true);

    response = await app.inject({
      method: 'GET',
      url: `/beta/order-sync/e15e4d80-d81b-40f4-aea1-d445e0ec8f3f`,
      headers: global.headers
    });
    expect(response.statusCode).to.equal(200);
    payload = response.json();
    expect(payload.type).to.equal('Sent To NoFraud');
    expect(payload.attempts.length).to.equal(1);
    expect(payload.attempts[0].errors.length).to.equal(0);
  });
});
