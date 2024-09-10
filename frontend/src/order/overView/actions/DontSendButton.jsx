import React from 'react';
import { Button } from '@commerce7/admin-ui';
import { putNotRequired } from '../../../api/Order';
import { orderIdFromUrl } from '../../../api/helpers';
import { useState } from 'react';

const DontSendButton = ({ setOrder, setError, isDisabled, setIsDisabled }) => {
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

  const handleDontSend = async () => {
    setIsDisabled(true);
    setIsLoading(true);
    await putNotRequired(orderIdFromUrl(), successFunction, errorFunction);
  };

  return (
    <Button
      size="small"
      startIcon="closeCircle"
      onClick={handleDontSend}
      loading={isLoading}
      variant="secondary"
      disabled={isDisabled}
    >
      Don't Send
    </Button>
  );
};

export default DontSendButton;
