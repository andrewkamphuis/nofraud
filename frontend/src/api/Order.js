import axios from 'axios';
import { axiosHeader, getRootUrl } from './helpers';

// get the order
export const getOrder = async (orderId, successFunction, errorFunction) => {
  try {
    const response = await axios.get(
      `${getRootUrl()}/beta/order-sync/${orderId}`,
      axiosHeader()
    );
    const data = await response.data;
    if (successFunction) {
      successFunction(data);
      return data;
    } else {
      return data;
    }
  } catch (error) {
    if (errorFunction) {
      console.log('error');
      errorFunction(error.response?.data);
      return;
    }
    throw new Error('Something went wrong');
  }
};

// create order at noFraud
export const createOrder = async (orderId, successFunction, errorFunction) => {
  try {
    const response = await axios.put(
      `${getRootUrl()}/beta/order-sync/${orderId}`,
      {},
      axiosHeader()
    );
    const data = await response.data;
    if (successFunction) {
      successFunction(data);
      return data;
    } else {
      return data;
    }
  } catch (error) {
    if (errorFunction) {
      errorFunction(error.response?.data);
      return;
    }
    throw new Error('Something went wrong');
  }
};

// create status at noFraud
export const checkStatus = async (orderId, successFunction, errorFunction) => {
  try {
    const response = await axios.put(
      `${getRootUrl()}/beta/order-sync/${orderId}/status`,
      {},
      axiosHeader()
    );
    const data = await response.data;
    if (successFunction) {
      successFunction(data);
      return data;
    } else {
      return data;
    }
  } catch (error) {
    if (errorFunction) {
      errorFunction(error.response?.data);
      return;
    }
    throw new Error('Something went wrong');
  }
};

// cancel order at noFraud
export const cancelOrder = async (orderId, successFunction, errorFunction) => {
  try {
    const response = await axios.put(
      `${getRootUrl()}/beta/order-sync/${orderId}/cancel`,
      {},
      axiosHeader()
    );
    const data = await response.data;
    if (successFunction) {
      successFunction(data);
      return data;
    } else {
      return data;
    }
  } catch (error) {
    if (errorFunction) {
      errorFunction(error.response?.data);
      return;
    }
    throw new Error('Something went wrong');
  }
};
