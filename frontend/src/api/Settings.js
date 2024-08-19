import axios from "axios";
import { axiosHeader, getRootUrl } from "./helpers";

// get settings
export const getSettings = async (successFunction, errorFunction) => {
  try {
    const response = await axios.get(
      `${getRootUrl()}/beta/tenant`,
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
      errorFunction(error);
      return;
    }
    console.error("Error fetching data:", error);
    throw new Error("Something went wrong");
  }
};

// update settings
export const updateSettings = async (
  params,
  successFunction,
  errorFunction
) => {
  try {
    const response = await axios.put(
      `${getRootUrl()}/beta/tenant`,
      params,
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
