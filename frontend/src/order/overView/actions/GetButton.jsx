import React from 'react';
import { Button } from '@commerce7/admin-ui';
import { getOrder } from '../../../api/Order';
import { orderIdFromUrl } from '../../../api/helpers';

const GetButton = ({
  successFunction,
  errorFunction,
  isLoading,
  setIsLoading
}) => {
  const handleRetryGet = async () => {
    setIsLoading(true);
    await getOrder(orderIdFromUrl(), successFunction, errorFunction).catch(
      (err) => {}
    );
  };

  return (
    <Button size="small" onClick={handleRetryGet} loading={isLoading}>
      Get Order
    </Button>
  );
};

export default GetButton;
