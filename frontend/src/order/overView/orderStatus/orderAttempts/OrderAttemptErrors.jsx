import React from "react";

const OrderAttemptErrors = ({ attemptErrors }) => {
  return (
    <div>
      {attemptErrors.map((error) => {
        return <li>{error.message}</li>;
      })}
    </div>
  );
};

export default OrderAttemptErrors;
