// Valid Keys are: validationError, notFound, processingError
// ErrorArray should be {field, message}  - valid keys are:
// Valid Status Codes are: 422, 404, 402,

const CustomError = function error(
  statusCode,
  message,
  type,
  errorArray,
  key,
  customAttributes
) {
  this.name = 'CustomError';
  this.statusCode = statusCode;
  this.message = message;
  this.type = type;
  this.errorArray = errorArray;
  this.key = key;
  this.customAttributes = customAttributes;
  // this.stack = (new Error()).stack;
};

CustomError.prototype = Object.create(Error.prototype);
CustomError.prototype.constructor = CustomError;

export default CustomError;

// validationError will always have an errorArray with invalid fields
// notFound errors are just 404
