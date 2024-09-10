import { useState } from 'react';
import VoidButton from './actions/VoidButton';
import RetryButton from './actions/RetryButton';
import DontSendButton from './actions/DontSendButton';

export const Actions = ({ order, setOrder, setError }) => {
  const [isDisabled, setIsDisabled] = useState(false);

  if (!order) {
    return (
      <RetryButton
        setOrder={setOrder}
        setError={setError}
        isDisabled={isDisabled}
        setIsDisabled={setIsDisabled}
      />
    );
  }

  const { type } = order;

  if (type === 'Not Required To Send') {
    return (
      <RetryButton
        setOrder={setOrder}
        setError={setError}
        isDisabled={isDisabled}
        setIsDisabled={setIsDisabled}
      />
    );
  }

  if (['Sent To Vinoshipper'].includes(type)) {
    return (
      <div>
        {/* <RetryButton
          setOrder={setOrder}
          setError={setError}
          isDisabled={isDisabled}
          setIsDisabled={setIsDisabled}
        /> */}
        <VoidButton
          setOrder={setOrder}
          setError={setError}
          isDisabled={isDisabled}
          setIsDisabled={setIsDisabled}
        />
      </div>
    );
  }

  if (['Failed To Send'].includes(type)) {
    return (
      <div>
        <RetryButton
          setOrder={setOrder}
          setError={setError}
          isDisabled={isDisabled}
          setIsDisabled={setIsDisabled}
        />
        <DontSendButton
          setOrder={setOrder}
          setError={setError}
          isDisabled={isDisabled}
          setIsDisabled={setIsDisabled}
        />
      </div>
    );
  }

  if (['Voided In Vinoshipper'].includes(type)) {
    return null;
  }

  return null;
};
