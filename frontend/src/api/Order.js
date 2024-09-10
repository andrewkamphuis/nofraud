import axios from "axios";
import { axiosHeader, getRootUrl } from "./helpers";

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
      errorFunction(error.response.data);
      return;
    }
    throw new Error("Something went wrong");
  }
};

// retry
export const putSync = async (orderId, successFunction, errorFunction) => {
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
      errorFunction(error.response.data);
      return;
    }
    throw new Error("Something went wrong");
  }
};

// void an existing order
export const putVoid = async (orderId, successFunction, errorFunction) => {
  try {
    const response = await axios.put(
      `${getRootUrl()}/beta/order-sync/${orderId}/void`,
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
      errorFunction(error.response.data);
      return;
    }
    throw new Error("Something went wrong");
  }
};

// remove requirement
export const putNotRequired = async (
  orderId,
  successFunction,
  errorFunction
) => {
  try {
    const response = await axios.put(
      `${getRootUrl()}/beta/order-sync/${orderId}/not-required`,
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
      errorFunction(error.response.data);
      return;
    }
    throw new Error("Something went wrong");
  }
};
