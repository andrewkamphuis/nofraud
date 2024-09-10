import React from 'react';
import { Button } from '@commerce7/admin-ui';
import { createOrder } from '../../../api/Order';
import { orderIdFromUrl } from '../../../api/helpers';
import { useState } from 'react';

const CreateOrderButton = ({
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

  const handleCreate = async () => {
    setIsDisabled(true);
    setIsLoading(true);
    await createOrder(orderIdFromUrl(), successFunction, errorFunction);
  };

  return (
    <Button
      size="small"
      startIcon="closeCircle"
      variant="secondary"
      onClick={handleCreate}
      loading={isLoading}
      disabled={isDisabled}
    >
      Sync Order
    </Button>
  );
};

export default CreateOrderButton;
