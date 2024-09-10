import React from 'react';
import { Button } from '@commerce7/admin-ui';
import { putVoid } from '../../../api/Order';
import { orderIdFromUrl } from '../../../api/helpers';
import { useState } from 'react';

const Void = ({ setOrder, setError, isDisabled, setIsDisabled }) => {
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

  const handleVoidSync = async () => {
    setIsDisabled(true);
    setIsLoading(true);
    await putVoid(orderIdFromUrl(), successFunction, errorFunction);
  };

  return (
    <Button
      startIcon="closeCircle"
      size="small"
      variant="secondary"
      onClick={handleVoidSync}
      loading={isLoading}
      disabled={isDisabled}
    >
      Void Sync
    </Button>
  );
};

export default Void;
