/* eslint-disable import/extensions */
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

import { sendToFifoQueue } from '../../helpers/sqsHelper.js';
import { OrderSyncManager } from '../orderSync/manager.js';
import { TenantManager } from '../tenant/manager.js';

import { sendMonitorEmail } from './sendEmail.js';

export const listTenants = async () => {
  const allActiveTenants = await TenantManager.listAllActiveTenants();
  for (const tenant of allActiveTenants) {
    const message = {
      tenantId: tenant.id,
      lastSyncDate: tenant.lastSyncDate,
      cursor: 'start',
      messageId: uuidv4()
    };
    // eslint-disable-next-line no-await-in-loop
    await sendToFifoQueue('scheduledTask', 'listOrdersFromSQS', message);
  }
};

export const monitor = async () => {
  const allActiveTenants = await TenantManager.listAllActiveTenants();
  await sendMonitorEmail(allActiveTenants);
};

export const listOrdersFromSQS = async (message) => {
  const { tenantId, lastSyncDate, cursor } = message;

  const c7Orders = await listCommerce7Orders(tenantId, lastSyncDate, cursor);
  // If no orders, return early
  if (c7Orders.orders.length === 0) {
    // †ødo iupdate the sync time to now
    return;
  }

  const c7OrderIds = c7Orders.orders.map((order) => order.id);

  const securityObj = { tenantId };
  const syncedOrders = await OrderSyncManager.listForIds(
    securityObj,
    c7OrderIds
  );

  // If the order hasn't been synced - then sync it
  for (const c7OrderId of c7OrderIds) {
    const isSynced = syncedOrders.find((order) => order.id === c7OrderId);
    if (!isSynced) {
      const orderMessage = {
        tenantId,
        orderId: c7OrderId,
        messageId: uuidv4()
      };
      // eslint-disable-next-line no-await-in-loop
      await sendToFifoQueue('scheduledTask', 'syncOrderFromSQS', orderMessage);
    }
  }

  if (c7Orders.cursor) {
    const ordersMessage = {
      tenantId,
      lastSyncDate,
      cursor: c7Orders.cursor,
      messageId: uuidv4()
    };
    // eslint-disable-next-line no-await-in-loop
    await sendToFifoQueue('scheduledTask', 'listOrdersFromSQS', ordersMessage);
  }
};

export const syncOrderFromSQS = async (message) => {
  const { tenantId, orderId } = message;
  const securityObj = { tenantId };

  // Check order again as it might have synced during SQS delays
  try {
    await OrderSyncManager.get(securityObj, orderId);
  } catch (err) {
    if (err.statusCode === 404) {
      await OrderSyncManager.sync(securityObj, orderId);
    }
  }
};

const listCommerce7Orders = async (tenantId, lastSyncDate, cursor) => {
  const url = `${process.env.C7_API_URL}/v1/order?orderPaidDate=gt:${lastSyncDate}&cursor=${cursor}`;
  const response = await axios.get(url, axiosHeader(tenantId));
  const order = response.data;
  return order;
};

const axiosHeader = (tenant) => {
  const options = {
    auth: {
      username: process.env.C7_APP_ID,
      password: process.env.C7_APP_SECRET
    },
    headers: {
      tenant
    }
  };
  return options;
};

export * as ScheduledTaskManager from './manager';
