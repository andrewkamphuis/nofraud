// export const notFoundError = () => ({
//   statusCode: 404,
//   apiError: {
//     statusCode: 404,
//     type: 'notFound',
//     message: '404 - doc not found or method not found',
//     errors: []
//   }
// });

export const apiError = (customError) => {
  const response = {
    statusCode: 500,
    apiError: {
      statusCode: 500,
      type: 'unknown',
      message: 'something went wrong',
      errors: []
    }
  };
  if (
    customError.name &&
    customError.name === 'SequelizeUniqueConstraintError'
  ) {
    return {
      statusCode: 422,
      apiError: {
        statusCode: 422,
        type: 'validationError',
        message: 'Database unique constraint error'
      }
    };
  }

  if (customError.name && customError.name === 'CustomError') {
    return {
      statusCode: customError.statusCode,
      apiError: {
        statusCode: customError.statusCode,
        type: customError.type,
        message: customError.message,
        errors: customError.errorArray,
        key: customError.key
      }
    };
  }

  // This is the raw  validation error in case our Schema doesn't pick it up
  if (customError.name && customError.name === 'ValidationError') {
    return validationError(customError);
  }

  // If we get this far we got a problem that we aren't handling in and should log it.
  return response;
};

const validationError = (mError) => {
  let error;
  const response = {
    statusCode: 422,
    apiError: {
      statusCode: 422,
      type: 'validationError',
      message: 'One or more elements is missing or invalid',
      errors: []
    }
  };

  for (const element of mError.errors) {
    // eslint-disable-next-line no-prototype-builtins
    if (mError.errors.hasOwnProperty(element)) {
      if (mError.errors[element].kind) {
        switch (mError.errors[element].kind) {
          case 'required':
            error = { field: element, message: `${element} is required` };
            break;
          case 'Date':
            error = {
              field: element,
              message: `${element} is not a valid date`
            };
            break;
          case 'minlength':
            error = {
              field: element,
              message: `${element} must be a minimum of ${mError.errors[element].properties.minlength} characters`
            };
            break;
          case 'maxlength':
            error = {
              field: element,
              message: `${element} must be a maximum of ${mError.errors[element].properties.maxlength} characters`
            };
            break;
          case 'user defined':
            error = {
              field: element,
              message: mError.errors[element].properties.message
            };
            break;
          default:
            error = { field: element, message: 'something went wrong' };
            break;
        }
      } else {
        error = { field: element, message: 'something went wrong' };
      }
    }
    response.apiError.errors.push(error);
  }
  return response;
};
