// eslint-disable-next-line import/extensions
import { TenantManager } from '../main/tenant/manager';

global.tenantId = 'testing';

global.headers = {
  tenantId: global.tenantId
};

global.createRequest = (headers, method, path, queryParams, payload) => {
  const message = {
    resource: path,
    path,
    httpMethod: method,
    queryStringParameters: queryParams,
    multiValueQueryStringParameters: headers,
    pathParameters: null,
    stageVariables: null,
    isBase64Encoded: true
  };
  if (payload) {
    message.body = Buffer.from(JSON.stringify(payload)).toString('base64');
  }
  return message;
};

before(async () => {
  await TenantManager.deleteForTestSuite(global.tenantId);
  const now = new Date();
  const tenant = {
    id: global.tenantId,
    noFraudUsername: 'test',
    noFraudPassword: 'test',
    installDate: now.toISOString(),
    isInstalled: true,
    lastSyncDate: now.toISOString()
  };
  await TenantManager.createForTestSuite(tenant);

  global.securityObj = {
    tenantId: global.tenantId
  };
});
