import jsonValidator from '../../helpers/jsonValidator';

export const tenantInstallSchema = () => {
  const schema = {
    type: 'object',
    properties: {
      noFraudUsername: { type: 'string' },
      noFraudPassword: { type: 'string' }
    },
    required: ['noFraudUsername', 'noFraudPassword'],
    additionalProperties: false
  };

  return schema;
};

export const tenantUpdateSchema = () => {
  const schema = {
    type: 'object',
    properties: {
      noFraudUsername: { type: 'string' },
      noFraudPassword: { type: 'string' }
    },
    additionalProperties: false
  };

  return schema;
};

export const validateUpdate = (params) =>
  jsonValidator.validate(tenantUpdateSchema(), params);

export const validateInstall = (params) =>
  jsonValidator.validate(tenantInstallSchema(), params);
