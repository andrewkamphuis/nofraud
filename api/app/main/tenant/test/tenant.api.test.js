/* globals createRequest */

import { expect } from 'chai';
import '../../../test/common';

import { app } from '../../../../index.js';
import { TenantManager } from '../manager';

describe('tenant.api.test.js - Tenant beta API', () => {
  before(async () => {
    await TenantManager.deleteForTestSuite('testing2');
  });

  after(async () => {
    await TenantManager.deleteForTestSuite('testing2');
  });

  it('should install, update, uninstall a SINGLE tenant on /tenant', async () => {
    let reqPayload = {
      noFraudUsername: 'Test',
      noFraudPassword: 'Test',
      tenantId: 'testing2',
      user: 'test'
    };
    let message = createRequest(undefined, 'POST', `/beta/tenant`, reqPayload);
    let response = await app(message);
    let payload = JSON.parse(response.body);
    expect(payload.noFraudUsername).to.equal('Test');
    expect(payload.noFraudPassword).to.equal(undefined);

    message = createRequest({ tenantId: 'testing2' }, 'GET', `/beta/tenant`);
    response = await app(message);
    payload = JSON.parse(response.body);
    expect(payload.noFraudUsername).to.equal('Test');
    expect(payload.noFraudPassword).to.equal(undefined);

    reqPayload = {
      noFraudUsername: 'Test2',
      noFraudPassword: 'Test2'
    };
    message = createRequest(
      { tenantId: 'testing2' },
      'PUT',
      `/beta/tenant`,
      undefined,
      reqPayload
    );
    response = await app(message);
    payload = JSON.parse(response.body);
    expect(payload.noFraudUsername).to.equal('Test2');
    expect(payload.noFraudPassword).to.equal(undefined);

    reqPayload = {
      tenantId: 'testing2',
      user: 'test'
    };
    message = createRequest(
      undefined,
      'POST',
      `/beta/tenant/uninstall`,
      undefined,
      reqPayload
    );
    response = await app(message);
    payload = JSON.parse(response.body);
    expect(payload.isInstalled).to.equal(false);

    // INSTALL AGAIN
    reqPayload = {
      noFraudUsername: 'Test',
      noFraudPassword: 'Test',
      tenantId: 'testing2',
      user: 'test'
    };
    message = createRequest(
      undefined,
      'POST',
      `/beta/tenant`,
      undefined,
      reqPayload
    );
    response = await app(message);
    payload = JSON.parse(response.body);
    expect(payload.noFraudUsername).to.equal('Test');
    expect(payload.noFraudPassword).to.equal(undefined);
  });
});
