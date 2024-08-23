import { expect } from 'chai';
// import '../../../test/common';

// import { TenantManager } from '../manager';
import { app } from '../../../../index.js';

describe('tenant.api.test.js - Tenant beta API', () => {
  //   before(async () => {
  //     await TenantManager.deleteForTestSuite('testing2');
  //   });

  //   after(async () => {
  //     await TenantManager.deleteForTestSuite('testing2');
  //   });

  const createRequest = (headers, method, path) => {
    const message = {
      resource: path,
      path,
      httpMethod: method,
      queryStringParameters: null,
      multiValueQueryStringParameters: headers,
      pathParameters: null,
      stageVariables: null,
      isBase64Encoded: true
    };
    return message;
  };

  it('should install, update, uninstall a SINGLE tenant on /tenant', async () => {
    // let response = await app.inject({
    //   method: 'POST',
    //   url: `/beta/tenant`,
    //   payload: {
    //     noFraudUsername: 'Test',
    //     noFraudPassword: 'Test',
    //     tenantId: 'testing2',
    //     user: 'test'
    //   }
    // });
    let message = createRequest(global.headers, 'POST', `/beta/tenant`);
    let response = await app(message);
    let payload = JSON.parse(response.body);
    expect(payload.success).to.equal(true);
    // expect(payload.noFraudUsername).to.equal('Test');
    // expect(payload.noFraudPassword).to.equal(undefined);

    // response = await app.inject({
    //     method: 'GET',
    //     url: `/beta/tenant`,
    //     headers: { tenantId: 'testing2' }
    //   });
    message = createRequest(global.headers, 'GET', `/beta/tenant`);
    response = await app(message);
    payload = JSON.parse(response.body);
    expect(payload.success).to.equal(true);
    // expect(payload.noFraudUsername).to.equal('Test');
    // expect(payload.noFraudPassword).to.equal(undefined);

    // response = await app.inject({
    //   method: 'PUT',
    //   url: `/beta/tenant`,
    //   payload: {
    //     noFraudUsername: 'Test2',
    //     noFraudPassword: 'Test2',
    //     stateCodes: ['AR']
    //   },
    //   headers: { tenantId: 'testing2' }
    // });
    message = createRequest(global.headers, 'PUT', `/beta/tenant`);
    response = await app(message);
    payload = JSON.parse(response.body);
    expect(payload.success).to.equal(true);
    // expect(payload.noFraudUsername).to.equal('Test2');
    // expect(payload.noFraudPassword).to.equal(undefined);
    // expect(payload.stateCodes[0]).to.equal('AR');

    // response = await app.inject({
    //   method: 'POST',
    //   url: `/beta/tenant/uninstall`,
    //   payload: {
    //     tenantId: 'testing2',
    //     user: 'test'
    //   }
    // });
    message = createRequest(global.headers, 'POST', `/beta/tenant/uninstall`);
    response = await app(message);
    payload = JSON.parse(response.body);
    expect(payload.success).to.equal(true);
    // expect(payload.isInstalled).to.equal(false);

    // INSTALL AGAIN
    // response = await app.inject({
    //   method: 'POST',
    //   url: `/beta/tenant`,
    //   payload: {
    //     noFraudUsername: 'Test',
    //     noFraudPassword: 'Test',
    //     tenantId: 'testing2',
    //     user: 'test'
    //   }
    // });
    message = createRequest(global.headers, 'POST', `/beta/tenant`);
    response = await app(message);
    payload = JSON.parse(response.body);
    expect(payload.success).to.equal(true);

    // expect(response.statusCode).to.equal(200);
    // payload = response.json();
    // expect(payload.noFraudUsername).to.equal('Test');
    // expect(payload.noFraudPassword).to.equal(undefined);
  });
});
