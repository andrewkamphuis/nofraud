import jsonValidator from '../../helpers/jsonValidator';

const tenantInstallSchema = () => {
  const schema = {
    type: 'object',
    properties: {
      noFraudAPIToken: { type: 'string' }
    },
    required: ['noFraudAPIToken'],
    additionalProperties: false
  };

  return schema;
};

const tenantUpdateSchema = () => {
  const schema = {
    type: 'object',
    properties: {
      noFraudAPIToken: { type: 'string' }
    },
    additionalProperties: false
  };

  return schema;
};

export const validateUpdate = (params) =>
  jsonValidator.validate(tenantUpdateSchema(), params);

export const validateInstall = (params) =>
  jsonValidator.validate(tenantInstallSchema(), params);
