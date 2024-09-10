import React from 'react';
import { Button } from '@commerce7/admin-ui';
import { checkStatus } from '../../../api/Order';
import { orderIdFromUrl } from '../../../api/helpers';
import { useState } from 'react';

const CheckStatusButton = ({
  setOrder,
  setError,
  isDisabled,
  setIsDisabled
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const errorFunction = (error) => {
    setIsLoading(false);
    setIsDisabled(false);
    setError(error);
  };

  const successFunction = (data) => {
    setError(null);
    setIsLoading(false);
    setIsDisabled(false);
    setOrder(data);
  };

  const handleCheckStatus = async () => {
    setIsDisabled(true);
    setIsLoading(true);
    await checkStatus(orderIdFromUrl(), successFunction, errorFunction);
  };

  return (
    <Button
      size="small"
      startIcon="closeCircle"
      variant="secondary"
      onClick={handleCheckStatus}
      loading={isLoading}
      disabled={isDisabled}
    >
      Check Order Status
    </Button>
  );
};

export default CheckStatusButton;
