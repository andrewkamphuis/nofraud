/* globals createRequest */

import { expect } from 'chai';
import '../../../test/common';

import { app } from '../../../../index.js';
import { OrderSyncManager } from '../../orderSync/manager';

describe('orderCard.api.test.js - Order Card beta API', () => {
  const local = {
    orderId: ''
  };

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

  it('should get a card on /order-card?orderId=orderId GET', async () => {
    const message = createRequest(undefined, 'GET', `/beta/order-card`, {
      tenantId: global.securityObj.tenantId,
      orderId: local.orderId
    });
    const response = await app(message);
    const payload = JSON.parse(response.body);
    expect(payload.variant).to.equal('error');
  });

  it('should get a card when no order exists /order-card?orderId=orderId GET', async () => {
    const message = createRequest(global.headers, 'GET', `/beta/order-card`, {
      tenantId: global.securityObj.tenantId,
      orderId: local.orderId
    });
    const response = await app(message);
    const payload = JSON.parse(response.body);
    expect(payload.variant).to.equal('error');
  });
});
