export const sync = async (req) => {
  // await ScheduledTaskManager.listTenants();
  const response = { success: true };
  return response;
};

export const monitor = async (req) => {
  // await ScheduledTaskManager.monitor();
  const response = { success: true };
  return response;
};

export * as scheduledTaskController from './controller.js';
