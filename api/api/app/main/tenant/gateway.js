import { Tenant } from '../../../models';
import { handleToJSON } from '../../helpers/apiHelper';

export const listAllActiveTenants = async () => {
  const tenants = await Tenant.findAll({
    where: { isInstalled: true }
  });
  return handleToJSON(tenants);
};

export * as Gateway from './gateway';
