import jsonValidator from '../../helpers/jsonValidator';

const stateArray = [
  'AL',
  'AK',
  'AZ',
  'AR',
  'CA',
  'CO',
  'CT',
  'DE',
  'FL',
  'GA',
  'HI',
  'ID',
  'IL',
  'IN',
  'IA',
  'KS',
  'KY',
  'LA',
  'ME',
  'MD',
  'MA',
  'MI',
  'MN',
  'MS',
  'MO',
  'MT',
  'NE',
  'NV',
  'NH',
  'NJ',
  'NM',
  'NY',
  'NC',
  'ND',
  'OH',
  'OK',
  'OR',
  'PA',
  'RI',
  'SC',
  'SD',
  'TN',
  'TX',
  'UT',
  'VT',
  'VA',
  'WA',
  'WV',
  'WI',
  'WY',
  'DC'
];

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
      noFraudPassword: { type: 'string' },
      stateCodes: {
        type: 'array',
        items: {
          type: 'string',
          enum: stateArray
        },
        uniqueItems: true,
        minItems: 0
      }
    },
    additionalProperties: false
  };

  return schema;
};

export const validateUpdate = (params) =>
  jsonValidator.validate(tenantUpdateSchema(), params);

export const validateInstall = (params) =>
  jsonValidator.validate(tenantInstallSchema(), params);
