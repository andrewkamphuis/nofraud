import { DAO } from './dao';
import { Gateway } from './gateway';

export const listAllActiveTenants = async () => {
  const tenants = await Gateway.listAllActiveTenants();
  return tenants;
};

export const get = async (securityObj) => {
  const tenant = await DAO.get(securityObj.tenantId);
  return tenant;
};

export const getWithSensitiveVariables = async (securityObj) => {
  const tenant = await DAO.getWithSensitiveVariables(securityObj.tenantId);
  return tenant;
};

export const createForTestSuite = async (params) => {
  if (process.env.NODE_ENV !== 'test' && process.env.NODE_ENV !== 'testFull') {
    throw new Error('No access to this function');
  }
  const tenant = await DAO.create(params);
  return tenant;
};

export const install = async (securityObj, params) => {
  const now = new Date();

  params.installDate = now.toISOString();
  params.isInstalled = true;
  params.lastSyncDate = now.toISOString();
  params.stateCodes = [];

  // Is it already created?  If so then update it
  const existingTenant = await teantIfExists(securityObj);
  if (existingTenant) {
    const tenant = await DAO.update(securityObj.tenantId, params);
    return tenant;
  }
  params.id = securityObj.tenantId;
  const tenant = await DAO.create(params);
  return tenant;
};

export const teantIfExists = async (securityObj) => {
  try {
    const tenant = await DAO.get(securityObj.tenantId);
    return tenant;
  } catch (e) {
    if (e.statusCode === 404) {
      return null;
    }
    throw e;
  }
};

export const uninstall = async (securityObj) => {
  const tenant = await DAO.update(securityObj.tenantId, { isInstalled: false });
  return tenant;
};

export const update = async (securityObj, params) => {
  const tenant = await DAO.update(securityObj.tenantId, params);
  return tenant;
};

export const deleteForTestSuite = async (id) => {
  if (process.env.NODE_ENV !== 'test' && process.env.NODE_ENV !== 'testFull') {
    throw new Error('No access to this function');
  }
  await DAO.deleteObj(id);
};

export * as TenantManager from './manager';
