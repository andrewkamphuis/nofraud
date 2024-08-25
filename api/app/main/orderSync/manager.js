import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

import { sendToFifoQueue } from '../../helpers/sqsHelper.js';
// import { TenantManager } from '../tenant/manager.js';

import { DAO } from './dao.js';
import { Gateway } from './gateway.js';

// let VINOSHIPPER_API_URL;
// if (process.env.NODE_ENV === 'production') {
//   VINOSHIPPER_API_URL = 'https://zlminc.dev'; // TODO update to production URL when going live.
// } else {
//   VINOSHIPPER_API_URL = 'https://zlminc.dev';
// }

// export const listForIds = async (securityObj, ids) => {
//   const orderSync = await Gateway.listForIds(securityObj, ids);
//   return orderSync;
// };

export const get = async (securityObj, id) => {
  const orderSync = await DAO.get(securityObj, id);
  return orderSync;
};

export const sync = async (securityObj, id) => {
  // Get order at C7
  const c7order = await getCommerce7Order(securityObj.tenantId, id);
  // Attempt to sync order
  const attempt = await attemptSyncWithNoFraud(securityObj, c7order);
  // Is order in our database

  try {
    let orderSync = await DAO.get(securityObj, id);
    orderSync = updateFromSync(securityObj, id, attempt);
    return orderSync;
  } catch (err) {
    if (err.statusCode === 404) {
      const orderSync = createFromSync(securityObj, id, attempt);
      return orderSync;
    }
    throw err;
  }
};

export const checkStatus = async (securityObj, id) => {
  // Get order at C7
  const c7order = await getCommerce7Order(securityObj.tenantId, id);
  // Attempt to sync order
  const attempt = await checkStatusWithNoFraud(securityObj, c7order);
  // Is order in our database

  try {
    let orderSync = await DAO.get(securityObj, id);
    orderSync = updateFromSync(securityObj, id, attempt);
    return orderSync;
  } catch (err) {
    if (err.statusCode === 404) {
      const orderSync = createFromSync(securityObj, id, attempt);
      return orderSync;
    }
    throw err;
  }
};

export const cancelAtNoFraud = async (securityObj, id) => {
  // Get order at C7
  const c7order = await getCommerce7Order(securityObj.tenantId, id);
  // Attempt to sync order
  const attempt = await cancelWithNoFraud(securityObj, c7order);
  // Is order in our database

  try {
    let orderSync = await DAO.get(securityObj, id);
    orderSync = updateFromSync(securityObj, id, attempt);
    return orderSync;
  } catch (err) {
    if (err.statusCode === 404) {
      const orderSync = createFromSync(securityObj, id, attempt);
      return orderSync;
    }
    throw err;
  }
};

// export const voidSync = async (securityObj, id) => {
//   // Get order at C7
//   const c7order = await getCommerce7Order(securityObj.tenantId, id);
//   // Attempt to void order
//   const attempt = await attemptVoidWithNoFraud(securityObj, c7order);
//   // Is order in our database
//   let orderSync = await DAO.get(securityObj, id);
//   orderSync = updateFromSync(securityObj, id, attempt);
//   return orderSync;
// };

export const webhook = async (params) => {
  const message = {
    tenantId: params.tenantId,
    orderId: params.payload.id,
    messageId: uuidv4()
  };
  await sendToFifoQueue('orderSync', 'webhookFromSQS', message);
};

export const webhookFromSQS = async (message) => {
  const { tenantId, orderId } = message;
  const securityObj = { tenantId };
  await sync(securityObj, orderId);
};

// export const notRequired = async (securityObj, id) => {
//   const now = new Date();
//   const params = {
//     attemptDate: now.toISOString(),
//     type: 'Not Required To Send'
//   };
//   let orderSync = await DAO.get(securityObj, id);
//   orderSync = updateFromSync(securityObj, id, params);
//   return orderSync;
// };

const getCommerce7Order = async (tenantId, id) => {
  const url = `${process.env.C7_API_URL}/v1/order/${id}`;
  const response = await axios.get(url, axiosHeader(tenantId));
  const order = response.data;
  return order;
};

// export const attemptSyncInTest = async (securityObj, c7order) => {
//   // Unit test just for testing
//   if (process.env.NODE_ENV !== 'test') {
//     throw new Error('Not allowed in non-test environment');
//   }
//   const attempt = await attemptSyncWithNoFraud(securityObj, c7order);
//   return attempt;
// };

// eslint-disable-next-line no-unused-vars
const attemptSyncWithNoFraud = async (securityObj, c7order) => {
  // const response = {
  //   id: '16f235a0-e4a3-529c-9b83-bd15fe722110',
  //   decision: 'fail',
  //   message: 'Declined'
  // };
  const now = new Date();
  const response = {
    attemptDate: now.toISOString(),
    type: 'fail',
    errors: [
      {
        message: `Declined`
      }
    ]
  };
  // TODO - write this whole function
  // if (c7order.orderDeliveryMethod !== 'Ship') {
  //   const response = invalidDeliveryMethod(c7order);
  //   return response;
  // }

  // if (c7order.shipTo?.countryCode !== 'US') {
  //   const response = invalidateShipToCountryCode();
  //   return response;
  // }

  // const settings = await TenantManager.getWithSensitiveVariables(securityObj);
  // if (!settings.stateCodes.includes(c7order.shipTo?.stateCode)) {
  //   const response = invalidateShipToStateCode(c7order);
  //   return response;
  // }

  // const payload = noFraudPayload(c7order);

  // const url = `${VINOSHIPPER_API_URL}/api/v3/p/orders`;
  // let response;
  // try {
  //   const axiosResponse = await axios.post(url, payload, {
  //     auth: {
  //       username: settings.noFraudUsername,
  //       password: settings.noFraudPassword
  //     }
  //   });
  //   console.log('-------------------response', axiosResponse);
  //   response = processNoFraudResponse(axiosResponse);
  // } catch (err) {
  //   console.log('-------------------error', err);
  //   response = processNoFraudErrorResponse(err.response);
  // }

  return response;
};

const checkStatusWithNoFraud = async (securityObj, c7order) => {
  // const response = {
  //   id: '16f235a0-e4a3-529c-9b83-bd15fe722110',
  //   decision: 'fail',
  //   message: 'Declined'
  // };
  const now = new Date();
  const response = {
    attemptDate: now.toISOString(),
    type: 'fail',
    errors: [
      {
        message: `Declined`
      }
    ]
  };
  // TODO - write this whole function
  // if (c7order.orderDeliveryMethod !== 'Ship') {
  //   const response = invalidDeliveryMethod(c7order);
  //   return response;
  // }

  // if (c7order.shipTo?.countryCode !== 'US') {
  //   const response = invalidateShipToCountryCode();
  //   return response;
  // }

  // const settings = await TenantManager.getWithSensitiveVariables(securityObj);
  // if (!settings.stateCodes.includes(c7order.shipTo?.stateCode)) {
  //   const response = invalidateShipToStateCode(c7order);
  //   return response;
  // }

  // const payload = noFraudPayload(c7order);

  // const url = `${VINOSHIPPER_API_URL}/api/v3/p/orders`;
  // let response;
  // try {
  //   const axiosResponse = await axios.post(url, payload, {
  //     auth: {
  //       username: settings.noFraudUsername,
  //       password: settings.noFraudPassword
  //     }
  //   });
  //   console.log('-------------------response', axiosResponse);
  //   response = processNoFraudResponse(axiosResponse);
  // } catch (err) {
  //   console.log('-------------------error', err);
  //   response = processNoFraudErrorResponse(err.response);
  // }

  return response;
};

const cancelWithNoFraud = async (securityObj, c7order) => {
  // const response = {
  //   id: '16f235a0-e4a3-529c-9b83-bd15fe722110',
  //   decision: 'fail',
  //   message: 'Declined'
  // };
  const now = new Date();
  const response = {
    attemptDate: now.toISOString(),
    type: 'fail',
    errors: [
      {
        message: `Declined`
      }
    ]
  };
  // TODO - write this whole function
  // if (c7order.orderDeliveryMethod !== 'Ship') {
  //   const response = invalidDeliveryMethod(c7order);
  //   return response;
  // }

  // if (c7order.shipTo?.countryCode !== 'US') {
  //   const response = invalidateShipToCountryCode();
  //   return response;
  // }

  // const settings = await TenantManager.getWithSensitiveVariables(securityObj);
  // if (!settings.stateCodes.includes(c7order.shipTo?.stateCode)) {
  //   const response = invalidateShipToStateCode(c7order);
  //   return response;
  // }

  // const payload = noFraudPayload(c7order);

  // const url = `${VINOSHIPPER_API_URL}/api/v3/p/orders`;
  // let response;
  // try {
  //   const axiosResponse = await axios.post(url, payload, {
  //     auth: {
  //       username: settings.noFraudUsername,
  //       password: settings.noFraudPassword
  //     }
  //   });
  //   console.log('-------------------response', axiosResponse);
  //   response = processNoFraudResponse(axiosResponse);
  // } catch (err) {
  //   console.log('-------------------error', err);
  //   response = processNoFraudErrorResponse(err.response);
  // }

  return response;
};

// const processNoFraudResponse = (axiosResponse) => {
//   const now = new Date();
//   if (axiosResponse.status === 200 && axiosResponse.data.status === 'SUCCESS') {
//     const response = {
//       attemptDate: now.toISOString(),
//       type: 'Sent To NoFraud'
//       // errors: [{  message: error }]
//     };
//     return response;
//   }
//   if (axiosResponse.data.status && axiosResponse.data.orderProblems) {
//     const errors = axiosResponse.data.orderProblems.map((i) => ({
//       message: i.description
//     }));
//     const response = {
//       attemptDate: now.toISOString(),
//       type: 'Failed To Send',
//       errors
//     };
//     return response;
//   }
//   throw new Error('Unknown error');
// };

// const processNoFraudErrorResponse = (axiosResponse) => {
//   const now = new Date();
//   if ([401, 403, 404, 500].includes(axiosResponse.status)) {
//     let error = 'Unknown server error';
//     if (axiosResponse.status === 401) {
//       error = 'Authentication failed to NoFraud';
//     }
//     if (axiosResponse.status === 403) {
//       error = 'Insufficient permission with NoFraud';
//     }
//     if (axiosResponse.status === 404) {
//       error = 'Not Found with NoFraud';
//     }
//     if (axiosResponse.status === 500) {
//       error = 'Server Error at NoFraud';
//     }

//     const response = {
//       attemptDate: now.toISOString(),
//       type: 'Failed To Send',
//       errors: [{ message: error }]
//     };
//     return response;
//   }

//   if (axiosResponse.status === 400) {
//     const reply = axiosResponse.data;
//     const { error } = reply;
//     // TODO do we want to handle these?
//     // VALIDATION COMPLIANCE PAYMENT_FAILURE SERVER_ERROR ACCESS_DENIED CONFLICT

//     const response = {
//       attemptDate: now.toISOString(),
//       type: 'Failed To Send',
//       errors: [
//         {
//           message: error?.errors?.[0]?.description || error.type
//         }
//       ]
//     };
//     return response;
//   }

//   if (axiosResponse.status === 200) {
//     const response = {
//       attemptDate: now.toISOString(),
//       type: 'Sent To NoFraud'
//       // errors: [{  message: error }]
//     };
//     return response;
//   }

//   throw new Error('Unknown error');
// };

// const noFraudPayload = (c7order) => {
//   const customer = {
//     email: c7order.customer.emails[0].email,
//     firstName: c7order.customer.firstName || c7order.shipTo.firstName,
//     lastName: c7order.customer.lastName || c7order.shipTo.lastName
//   };

//   if (c7order.billTo) {
//     customer.address = {
//       street1: c7order.billTo.address,
//       street2: c7order.billTo.address2 || '',
//       city: c7order.billTo.city,
//       postalCode: c7order.billTo.zipCode,
//       stateCode: c7order.billTo.stateCode
//     };
//   }

//   const { phone } = c7order.shipTo;
//   const payload = {
//     customer,
//     shipToAddress: {
//       country: 'US',
//       phone: {
//         number: phone.length === 12 && phone.slice(2),
//         country: 1
//       },
//       street1: c7order.shipTo.address,
//       street2: c7order.shipTo.address2 || '',
//       city: c7order.shipTo.city,
//       postalCode: c7order.shipTo.zipCode,
//       stateCode: c7order.shipTo.stateCode
//     },
//     shippingRate: {
//       carrier: c7order.shipping[0].carrier,
//       rateCode: c7order.shipping[0].code,
//       price: c7order.shipping[0].price / 100
//     },
//     products: [],
//     orderNumber: c7order.orderNumber,
//     productIdType: 'SKU',
//     Paid: true
//   };

//   payload.products = c7order.items.map((item) => ({
//     productId: item.sku,
//     quantity: item.quantity,
//     price: item.price / 100
//   }));

//   return payload;
// };

// const invalidDeliveryMethod = (c7order) => {
//   const now = new Date();
//   const response = {
//     attemptDate: now.toISOString(),
//     type: 'Not Required To Send',
//     errors: [
//       {
//         message: `Order Delivery Method is ${c7order.orderDeliveryMethod}`
//       }
//     ]
//   };
//   return response;
// };

// const invalidateShipToCountryCode = () => {
//   const now = new Date();
//   const response = {
//     attemptDate: now.toISOString(),
//     type: 'Not Required To Send',
//     errors: [
//       {
//         message: `Order is not being shipped to the US`
//       }
//     ]
//   };
//   return response;
// };

// const invalidateShipToStateCode = (c7order) => {
//   const now = new Date();
//   const response = {
//     attemptDate: now.toISOString(),
//     type: 'Not Required To Send',
//     errors: [
//       {
//         message: `Order is being sent to ${c7order.shipTo.stateCode} which is not in NoFraud Settings`
//       }
//     ]
//   };
//   return response;
// };

// // eslint-disable-next-line no-unused-vars
// const attemptVoidWithNoFraud = async (securityObj, c7order) => {
//   const now = new Date();
//   const settings = await TenantManager.getWithSensitiveVariables(securityObj);
//   const url = `${VINOSHIPPER_API_URL}/api/v3/p/orders/${c7order.orderNumber}/cancel`;
//   const payload = {
//     reason: 'Order was cancelled'
//   };
//   try {
//     await axios.post(url, payload, {
//       auth: {
//         username: settings.noFraudUsername,
//         password: settings.noFraudPassword
//       }
//     });
//     const response = {
//       attemptDate: now.toISOString(),
//       type: 'Voided In NoFraud'
//     };
//     return response;
//   } catch (err) {
//     const response = processNoFraudErrorResponse(err.response);
//     return response;
//   }
// };

const axiosHeader = (tenant) => {
  const options = {
    auth: {
      username: process.env.C7_APP_ID,
      password: process.env.C7_APP_SECRET
    },
    headers: {
      tenant
    }
  };
  return options;
};

export const deleteAll = async (securityObj) => {
  await Gateway.deleteAll(securityObj);
};

const updateFromSync = async (securityObj, id, attempt) => {
  let orderSync = await DAO.get(securityObj, id);

  const attemptParams = attempt;
  attemptParams.id = uuidv4();
  attemptParams.orderSyncId = id;

  if (attemptParams.errors) {
    attemptParams.errors = attemptParams.errors.map((error) => {
      const newError = error;
      newError.id = uuidv4();
      return newError;
    });
  }

  await DAO.createAttempt(securityObj, attemptParams);

  const params = {
    id,
    lastSyncAttemptDate: attempt.attemptDate,
    type: attempt.type
  };

  orderSync = await update(securityObj, params);

  return orderSync;
};

const createFromSync = (securityObj, id, attempt) => {
  const params = {
    id,
    lastSyncAttemptDate: attempt.attemptDate,
    type: attempt.type,
    attempts: [attempt]
  };
  const orderSync = create(securityObj, params);
  return orderSync;
};

export const create = async (securityObj, params) => {
  params.id = params.id || uuidv4();
  if (params.attempts) {
    params.attempts = params.attempts.map((item) => {
      const newItem = item;
      if (newItem.errors) {
        newItem.errors = newItem.errors.map((error) => {
          const newError = error;
          newError.id = uuidv4();
          return newError;
        });
      }
      newItem.id = uuidv4();
      return newItem;
    });
  }
  const orderSync = await DAO.create(securityObj, params);

  return orderSync;
};

const update = async (securityObj, params) => {
  // Does not update sub objects
  const orderSync = await DAO.update(securityObj, params.id, params);

  return orderSync;
};

export * as OrderSyncManager from './manager';
