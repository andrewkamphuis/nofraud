import { useState } from "react";
import DontSendButton from "./actions/DontSendButton";
import RetryButton from "./actions/RetryButton";
import VoidButton from "./actions/VoidButton";

export const Actions = ({ order, setOrder, setError }) => {
  const [isLoading, setIsLoading] = useState(false);

  const errorFunction = (error) => {
    setIsLoading(false);
    setError(error);
  };

  const successFunction = (data) => {
    setError(null);
    setIsLoading(false);
    setOrder(data);
  };

  if (!order) {
    return (
      <RetryButton
        successFunction={successFunction}
        errorFunction={errorFunction}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
    );
  }

  const { type } = order;

  //TODO review enums with andrew
  if (type === "Not Required To Send") {
    return (
      <RetryButton
        successFunction={successFunction}
        errorFunction={errorFunction}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
    );
  }

  if (["Success", "Sent To NoFraud"].includes(type)) {
    return (
      <div>
        <VoidButton setIsLoading={setIsLoading} setOrder={setOrder} />
        <RetryButton
          successFunction={successFunction}
          errorFunction={errorFunction}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
        />
      </div>
    );
  }

  if (type === "Sent but errored") {
    return (
      <div>
        <DontSendButton
          successFunction={successFunction}
          errorFunction={errorFunction}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
        />
        <RetryButton
          successFunction={successFunction}
          errorFunction={errorFunction}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
        />
      </div>
    );
  }

  // TODO not checked is not an agreed upon enum
  if (
    ["Not sent", "Dont Send", "Voided In NoFraud"].includes(type) ||
    ["Failed To Send"].includes(type)
  ) {
    return (
      <div>
        {/* <GetButton
          successFunction={successFunction}
          errorFunction={errorFunction}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
        /> */}
        <RetryButton
          successFunction={successFunction}
          errorFunction={errorFunction}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
        />
      </div>
    );
  }

  return null;
};
