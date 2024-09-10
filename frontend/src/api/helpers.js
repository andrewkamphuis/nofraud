import queryString from 'query-string';

export const tenantFromURL = () => {
  const parsed = queryString.parse(window.location.search);
  return parsed.tenantId;
};

export const orderIdFromUrl = () => {
  const parsed = queryString.parse(window.location.search);
  return parsed.orderId;
};

export const axiosHeader = () => {
  return {
    headers: {
      tenant: tenantFromURL(),
      tenantId: tenantFromURL()
    }
  };
};

export const getRootUrl = () => {
  // local
  // return "http://0.0.0.0:4000";

  // ngrok
  return 'https://noFraud-api.tinygrape.co';

  // throw new Error("Your ENV is incorrect");
};
