import { useState } from 'react';
import CancelOrderButton from './actions/CancelOrderButton';
import CheckStatusButton from './actions/CheckStatusButton';
import CreateOrderButton from './actions/CreateOrderButton';
export const Actions = ({ order, setOrder, setError }) => {
  const [isDisabled, setIsDisabled] = useState(false);

  if (!order) return null;

  const { type } = order;

  if (
    ['Pass', 'Needs Review', 'Fail', 'Cancelled', 'Not Required'].includes(type)
  ) {
    return (
      <>
        <CreateOrderButton
          setOrder={setOrder}
          setError={setError}
          isDisabled={isDisabled}
          setIsDisabled={setIsDisabled}
        />
        <CheckStatusButton
          setOrder={setOrder}
          setError={setError}
          isDisabled={isDisabled}
          setIsDisabled={setIsDisabled}
        />
        <CancelOrderButton
          setOrder={setOrder}
          setError={setError}
          isDisabled={isDisabled}
          setIsDisabled={setIsDisabled}
        />
      </>
    );
  }

  return null;
};
