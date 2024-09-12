import Ajv from 'ajv';
import addFormats from 'ajv-formats';

const ajv = new Ajv({ $data: true, allErrors: true });
addFormats(ajv);

const excludeHTMLRegex = '^(?!.*<[^>]+>).*';

const nameRegex = "^[A-Za-zÀ-ÖØ-öø-ÿ&-/./' ]*$";

const httpsRegEx = 'https://(.*)';

const domainRegEx = `^(?!-)[a-zA-Z0-9-]+(\\.[a-zA-Z]{2,})+$`;

const hexColorRegex = '^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$';

const validate = (schema, data, customValidation) => {
  let errorArray = [];
  const results = data;

  schema = addHTMLPatternToPlainStrings(schema);
  schema = addHttpsToUri(schema);
  const validateWithAJV = ajv.compile(schema);
  if (!validateWithAJV(results)) {
    errorArray = transformErrorArray(validateWithAJV.errors);
  }
  if (typeof customValidation === 'object') {
    const customErrorArray = customValidation;
    errorArray.push(...customErrorArray);
  }
  return errorArray;
};

function traverse(x) {
  if (Array.isArray(x)) {
    traverseArray(x);
  } else if (typeof x === 'object' && x !== null) {
    traverseObject(x);
  }
}

function traverseArray(arr) {
  arr.forEach((x) => {
    traverse(x);
  });
}

function traverseObject(obj) {
  const dataArray = Object.keys(obj);
  dataArray.forEach((key) => {
    if (obj[key] === '' || obj[key] === null) {
      delete obj[key];
    } else {
      traverse(obj[key]);
    }
  });
}

const transformErrorArray = (jsonErrorArray) => {
  const newArray = [];
  let err = {};
  for (const jsonError of jsonErrorArray) {
    let field = jsonError.instancePath;
    // Replace first character if it's a slash
    if (field[0] === '/') {
      field = field.substring(1);
    }
    // Replace first character if it's a period
    if (field[0] === '.') {
      field = field.substring(1);
    }
    // Convert /0/ to [0].
    field = field.replace(/\/\d+\//g, (match) => {
      let string = match;
      string = string.replace('/', '[');
      string = string.replace('/', '].');
      return `${string}`;
    });
    // Convert /0 to [0]
    field = field.replace(/\/\d+/g, (match) => {
      let string = match;
      string = string.replace('/', '[');
      return `${string}]`;
    });

    let errorMessage = jsonError.message;
    switch (jsonError.keyword) {
      case 'additionalProperties':
        if (jsonError.instancePath.length > 0) {
          err = {
            field: `${field}.${jsonError.params.additionalProperty}`,
            message: 'invalid additional property'
          };
        } else {
          err = {
            field: `${jsonError.params.additionalProperty}`,
            message: 'invalid additional property'
          };
        }
        break;
      case 'required':
        if (jsonError.instancePath.length > 0) {
          err = {
            field: `${field}.${jsonError.params.missingProperty}`,
            message: 'required'
          };
        } else {
          err = {
            field: `${jsonError.params.missingProperty}`,
            message: 'required'
          };
        }
        break;
      case 'type':
        err = {
          field: `${field}`,
          message: `must be a ${jsonError.params.type}`
        };
        break;
      case 'maxLength':
        err = {
          field: `${field}`,
          message: errorMessage
        };
        break;
      case 'minLength':
        err = {
          field: `${field}`,
          message: errorMessage
        };
        break;
      case 'enum':
        err = {
          field: `${field}`,
          message: errorMessage
        };
        break;
      case 'minimum':
        err = {
          field: `${field}`,
          message: errorMessage
        };
        break;
      case 'pattern':
        if (jsonError.params.pattern === excludeHTMLRegex) {
          errorMessage = 'contains invalid string';
        }
        if (jsonError.params.pattern === httpsRegEx) {
          errorMessage = 'must be https';
        }
        if (jsonError.params.pattern === domainRegEx) {
          errorMessage = 'must be a valid domain such as commerce7.com';
        }
        if (jsonError.params.pattern === nameRegex) {
          errorMessage = 'contains invalid characters for a name';
        }
        err = {
          field: `${field}`,
          message: errorMessage
        };
        break;
      case 'format':
        err = {
          field: `${field}`,
          message: errorMessage
        };
        break;
      default:
        err = {
          field: `${field}`,
          message: errorMessage
        };
    }
    newArray.push(err);
  }
  return newArray;
};

const addHTMLPatternToPlainStrings = (schema) => {
  if (!schema?.properties) {
    return schema;
  }
  for (const propertyKey of Object.keys(schema.properties)) {
    const property = schema.properties[propertyKey];
    if (isPlainStringProperty(property)) {
      property.pattern = excludeHTMLRegex;
    }
    if (property.type === 'object') {
      addHTMLPatternToPlainStrings(property);
    }
    if (property.type === 'array') {
      addHTMLPatternToPlainStrings(property.items);
    }
  }

  return schema;
};

const addHttpsToUri = (schema) => {
  if (!schema?.properties) {
    return schema;
  }
  for (const propertyKey of Object.keys(schema.properties)) {
    const property = schema.properties[propertyKey];
    if (property.format === 'uri') {
      property.pattern = httpsRegEx;
    }
    if (property.pattern === 'domain') {
      property.pattern = domainRegEx;
    }
    if (property.type === 'object') {
      addHttpsToUri(property);
    }
    if (property.type === 'array') {
      addHttpsToUri(property.items);
    }
  }
  return schema;
};

const isPlainStringProperty = (property) => {
  const isTypeAnArray = Array.isArray(property.type);
  if (isTypeAnArray && !property.type.includes('string')) {
    return false;
  }
  if (!isTypeAnArray && property.type !== 'string') {
    return false;
  }

  // If there's already a pattern/format defined, don't override
  if (property.pattern || property.format || property.enum) {
    return false;
  }

  return true;
};

const helper = {
  validate,
  hexColorRegex
};

export default helper;
