import React from 'react';
import { Button } from '@commerce7/admin-ui';
import { putSync } from '../../../api/Order';
import { orderIdFromUrl } from '../../../api/helpers';
import { useState } from 'react';

const RetryButton = ({ setOrder, setError, isDisabled, setIsDisabled }) => {
  const [isLoading, setIsLoading] = useState(false);

  const errorFunction = (error) => {
    console.log('errorFunction');
    setIsLoading(false);
    setIsDisabled(false);
    setError(error);
  };

  const successFunction = (data) => {
    console.log('successFunction');
    console.log('🚀 ~ file: RetryButton.jsx:17 ~ data:', data);
    setError(null);
    setIsLoading(false);
    setIsDisabled(false);
    setOrder(data);
  };

  const handleRetrySyncing = async () => {
    setIsDisabled(true);
    setIsLoading(true);
    await putSync(orderIdFromUrl(), successFunction, errorFunction);
  };

  return (
    <Button
      startIcon="sync"
      size="small"
      onClick={handleRetrySyncing}
      loading={isLoading}
      disabled={isDisabled}
    >
      Retry Sync
    </Button>
  );
};

export default RetryButton;
