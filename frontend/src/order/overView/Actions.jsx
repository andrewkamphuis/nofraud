import { useState } from 'react';
import CancelOrderButton from './actions/CancelOrderButton';
import CheckStatusButton from './actions/CheckStatusButton';
import CreateOrderButton from './actions/CreateOrderButton';

export const Actions = ({ order, setOrder, setError }) => {
  const [isDisabled, setIsDisabled] = useState(false);

  if (!order) {
    return (
      <>
        <CreateOrderButton
          setOrder={setOrder}
          setError={setError}
          isDisabled={isDisabled}
          setIsDisabled={setIsDisabled}
        />
      </>
    );
  }

  const { type } = order;

  if (['Pass'].includes(type)) {
    return (
      <CancelOrderButton
        setOrder={setOrder}
        setError={setError}
        isDisabled={isDisabled}
        setIsDisabled={setIsDisabled}
      />
    );
  }

  if (['Needs Review'].includes(type)) {
    return (
      <CheckStatusButton
        setOrder={setOrder}
        setError={setError}
        isDisabled={isDisabled}
        setIsDisabled={setIsDisabled}
      />
    );
  }

  return null;
};
