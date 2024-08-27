import jsonValidator from '../../helpers/jsonValidator.js';

const orderSyncCancelSchema = () => {
  const schema = {
    type: 'object',
    properties: {
      transactionId: { type: 'string' }
    },
    additionalProperties: false
  };

  return schema;
};

// eslint-disable-next-line import/prefer-default-export
export const validateCancel = (params) =>
  jsonValidator.validate(orderSyncCancelSchema(), params);
