export const sync = async (req, reply) => {
  // await ScheduledTaskManager.listTenants();
  reply.send({ isSuccess: true });
};

export const monitor = async (req, reply) => {
  // await ScheduledTaskManager.monitor();
  reply.send({ isSuccess: true });
};

export * as scheduledTaskController from './controller';
