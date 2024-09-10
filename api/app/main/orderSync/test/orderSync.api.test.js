/* globals createRequest */

import { expect } from 'chai';
import nock from 'nock';
import '../../../test/common';

import { app } from '../../../../index.js';
import { OrderSyncManager } from '../manager';

import { cancel, success } from './noFraudSamples';
import { c7Order, settings, webhook } from './sample';

describe('orderSync.api.test.js - Order Sync beta API', () => {
  const local = {
    orderId: '12345'
  };

  before(() => {
    if (process.env.NODE_ENV !== 'testFull') {
      nock(process.env.C7_API_URL)
        .get(/\/v1\/order\/.*/)
        .reply(200, c7Order())
        .persist();
      nock(process.env.C7_API_URL)
        .get(`/v1/setting/for-web?version=V2`)
        .reply(200, settings())
        .persist();
      nock(process.env.NOFRAUD_API_URL)
        .post(`/`)
        .reply(200, success())
        .persist();
      nock(process.env.NOFRAUD_API_URL)
        .get(/^\/status_by_invoice\/.+\/.+/)
        .reply(200, success())
        .persist();
      nock(process.env.NOFRAUD_API_URL)
        .post(`/api/v1/transaction-update/cancel-transaction`)
        .reply(200, cancel())
        .persist();
    }
  });

  beforeEach(async () => {
    const now = new Date();
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const params = {
      lastSyncAttemptDate: now.toISOString(),
      type: 'Fail',
      attempts: [
        {
          attemptDate: now.toISOString(),
          type: 'Fail',
          errors: [
            { message: 'State Code Doesnt Exist' },
            { message: 'State Code Doesnt Exist' }
          ]
        },
        {
          attemptDate: yesterday.toISOString(),
          type: 'Fail'
        }
      ]
    };
    const orderSync = await OrderSyncManager.create(global.securityObj, params);
    local.orderId = orderSync.id;
  });

  afterEach(async () => {
    await OrderSyncManager.deleteAll(global.securityObj);
  });

  after(() => {
    nock.cleanAll();
  });

  it('should test the base route', async () => {
    const message = createRequest(global.headers, 'GET', '/');
    const response = await app(message);
    const payload = JSON.parse(response.body);
    expect(payload.App).to.equal('NoFraud Integration App API - v2');
  });

  it('should get the order on /order-sync/:orderId GET', async () => {
    const message = createRequest(
      global.headers,
      'GET',
      `/beta/order-sync/${local.orderId}`
    );
    const response = await app(message);
    const payload = JSON.parse(response.body);
    expect(payload.type).to.equal('Fail');
  });

  it('should send an order to NoFraud on /order-sync/:orderId PUT', async () => {
    const message = createRequest(
      global.headers,
      'PUT',
      `/beta/order-sync/${local.orderId}`
    );
    const response = await app(message);
    const payload = JSON.parse(response.body);
    expect(payload.type).to.equal('Pass');
  });

  it('should check status at NoFraud  on /order-sync/:orderId/status PUT', async () => {
    const message = createRequest(
      global.headers,
      'PUT',
      `/beta/order-sync/${local.orderId}/status`
    );
    const response = await app(message);
    const payload = JSON.parse(response.body);
    expect(payload.type).to.equal('Pass');
  });

  it.only('should cancel at NoFraud  on /order-sync/:orderId/cancel PUT', async () => {
    const message = createRequest(
      global.headers,
      'PUT',
      `/beta/order-sync/${local.orderId}/cancel`,
      undefined
    );
    const response = await app(message);
    const payload = JSON.parse(response.body);
    expect(payload.type).to.equal('Cancelled');
  });

  // it('should update an order sync to NoFraud /order-sync/:orderId PUT', async () => {
  //   const response = await app.inject({
  //     method: 'PUT',
  //     url: `/beta/order-sync/${local.orderId}`,
  //     headers: global.headers
  //   });
  //   expect(response.statusCode).to.equal(200);
  //   const payload = response.json();
  //   expect(payload.type).to.equal('Sent To NoFraud');
  // });

  // it('should error on pickup order', async () => {
  //   const order = c7Order();
  //   const pickupOrder = structuredClone(order);
  //   pickupOrder.orderDeliveryMethod = 'Pickup';
  //   const response = await OrderSyncManager.attemptSyncInTest(
  //     global.securityObj,
  //     pickupOrder
  //   );
  //   expect(response.type).to.equal('Not Required To Send');
  // });

  // it('should error on non-country order', async () => {
  //   const order = c7Order();
  //   const pickupOrder = structuredClone(order);
  //   pickupOrder.shipTo.countryCode = 'CA';
  //   const response = await OrderSyncManager.attemptSyncInTest(
  //     global.securityObj,
  //     pickupOrder
  //   );
  //   expect(response.type).to.equal('Not Required To Send');
  // });

  // it('should error on non-state order', async () => {
  //   const order = c7Order();
  //   const pickupOrder = structuredClone(order);
  //   pickupOrder.shipTo.stateCode = 'CA';
  //   const response = await OrderSyncManager.attemptSyncInTest(
  //     global.securityObj,
  //     pickupOrder
  //   );
  //   expect(response.type).to.equal('Not Required To Send');
  // });

  // it('should create an order sync to NoFraud /order-sync/:orderId PUT', async () => {
  //   const response = await app.inject({
  //     method: 'PUT',
  //     url: `/beta/order-sync/1234`,
  //     headers: global.headers
  //   });
  //   expect(response.statusCode).to.equal(200);
  //   const payload = response.json();
  //   expect(payload.type).to.equal('Sent To NoFraud');
  //   expect(payload.attempts.length).to.equal(1);
  //   expect(payload.attempts[0].errors.length).to.equal(0);
  // });

  // it('should void a sync /order-sync/:orderId/void PUT', async () => {
  //   const response = await app.inject({
  //     method: 'PUT',
  //     url: `/beta/order-sync/${local.orderId}/void`,
  //     headers: global.headers
  //   });
  //   expect(response.statusCode).to.equal(200);
  //   const payload = response.json();
  //   expect(payload.type).to.equal('Voided In NoFraud');
  //   expect(payload.attempts.length).to.equal(3);
  //   expect(payload.attempts[0].errors.length).to.equal(0);
  // });

  // it('should mark a sync not required /order-sync/:orderId/not-required PUT', async () => {
  //   const response = await app.inject({
  //     method: 'PUT',
  //     url: `/beta/order-sync/${local.orderId}/not-required`,
  //     headers: global.headers
  //   });
  //   expect(response.statusCode).to.equal(200);
  //   const payload = response.json();
  //   expect(payload.type).to.equal('Not Required To Send');
  //   expect(payload.attempts.length).to.equal(3);
  //   expect(payload.attempts[0].errors.length).to.equal(0);
  // });

  it('should listen for a webhook /order-sync/webhook PUT', async () => {
    let message = createRequest(
      undefined,
      'POST',
      `/beta/order-sync/webhook`,
      undefined,
      webhook()
    );
    let response = await app(message);
    let payload = JSON.parse(response.body);
    expect(payload.isSuccess).to.equal(true);

    message = createRequest(
      global.headers,
      'GET',
      `/beta/order-sync/${local.orderId}`
    );
    response = await app(message);
    payload = JSON.parse(response.body);
    expect(payload.type).to.equal('Fail');
    // expect(payload.type).to.equal('Sent To NoFraud');
    // expect(payload.attempts.length).to.equal(1);
    // expect(payload.attempts[0].errors.length).to.equal(0);
  });
});
