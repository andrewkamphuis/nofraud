/* globals app */

import { expect } from 'chai';
import nock from 'nock';

import '../../../test/common';

import { c7Orders } from './sample';

describe('scheduledTask.api.test.js - Scheduled Task beta API', () => {
  before(() => {
    if (process.env.NODE_ENV !== 'testFull') {
      nock(process.env.C7_API_URL)
        .get('/v1/order')
        .query(true)
        .reply(200, c7Orders())
        .get(/\/v1\/order\/.*/)
        .reply(200, c7Orders().orders[0])
        .persist();
    }
  });

  after(() => {
    nock.cleanAll();
  });

  it('should monitor scheduled tasks on /scheduled-task/monitor GET', async () => {
    const response = await app.inject({
      method: 'GET',
      url: `/beta/scheduled-task/monitor`,
      headers: global.headers
    });
    expect(response.statusCode).to.equal(200);
    const payload = response.json();
    expect(payload.isSuccess).to.equal(true);
  });

  it('should sync scheduled tasks on /scheduled-task/sync GET', async () => {
    const response = await app.inject({
      method: 'GET',
      url: `/beta/scheduled-task/sync`,
      headers: global.headers
    });
    expect(response.statusCode).to.equal(200);
    const payload = response.json();
    expect(payload.isSuccess).to.equal(true);
  });
});
