// eslint-disable-next-line import/prefer-default-export
export const sampleLambdaMessage = {
  body: 'eyJub0ZyYXVkQVBJVG9rZW4iOiJ0ZXN0In0=',
  headers: {
    Accept: '*/*',
    'Accept-Encoding': 'gzip, deflate, br',
    Connection: 'keep-alive',
    'Content-Length': '26',
    'Content-Type': 'application/json',
    Host: 'localhost:4002',
    'Postman-Token': '28bd28ec-defe-4dda-81e4-1f84280f4bd6',
    'User-Agent': 'PostmanRuntime/7.41.1',
    'X-Forwarded-Port': '4002',
    'X-Forwarded-Proto': 'http'
  },
  httpMethod: 'POST',
  isBase64Encoded: true,
  multiValueHeaders: {
    Accept: ['*/*'],
    'Accept-Encoding': ['gzip, deflate, br'],
    Connection: ['keep-alive'],
    'Content-Length': ['26'],
    'Content-Type': ['application/json'],
    Host: ['localhost:4002'],
    'Postman-Token': ['28bd28ec-defe-4dda-81e4-1f84280f4bd6'],
    'User-Agent': ['PostmanRuntime/7.41.1'],
    'X-Forwarded-Port': ['4002'],
    'X-Forwarded-Proto': ['http']
  },
  multiValueQueryStringParameters: { tenantId: ['development'] },
  path: '/beta/tenant',
  pathParameters: { proxy: 'tenant' },
  queryStringParameters: { tenantId: 'development' },
  requestContext: {
    accountId: '123456789012',
    apiId: '1234567890',
    domainName: 'localhost:4002',
    extendedRequestId: null,
    httpMethod: 'POST',
    identity: {
      accountId: null,
      apiKey: null,
      caller: null,
      cognitoAuthenticationProvider: null,
      cognitoAuthenticationType: null,
      cognitoIdentityPoolId: null,
      sourceIp: '127.0.0.1',
      user: null,
      userAgent: 'Custom User Agent String',
      userArn: null
    },
    path: '/beta/{proxy+}',
    protocol: 'HTTP/1.1',
    requestId: '55648304-1573-41c3-80f3-bd8edc5a3f27',
    requestTime: '26/Aug/2024:15:28:00 +0000',
    requestTimeEpoch: 1724686080,
    resourceId: '123456',
    resourcePath: '/beta/{proxy+}',
    stage: 'Prod'
  },
  resource: '/beta/{proxy+}',
  stageVariables: null
};
