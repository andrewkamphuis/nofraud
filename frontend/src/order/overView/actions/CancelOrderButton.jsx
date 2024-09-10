import React from 'react';
import { Button } from '@commerce7/admin-ui';
import { cancelOrder } from '../../../api/Order';
import { orderIdFromUrl } from '../../../api/helpers';
import { useState } from 'react';

const CancelOrderButton = ({
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

  const handleCancel = async () => {
    setIsDisabled(true);
    setIsLoading(true);
    await cancelOrder(orderIdFromUrl(), successFunction, errorFunction);
  };

  return (
    <Button
      size="small"
      startIcon="closeCircle"
      variant="secondary"
      onClick={handleCancel}
      loading={isLoading}
      disabled={isDisabled}
    >
      Cancel Order
    </Button>
  );
};

export default CancelOrderButton;
