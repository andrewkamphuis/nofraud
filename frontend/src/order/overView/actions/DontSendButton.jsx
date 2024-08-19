import React from "react";
import { Button } from "@commerce7/admin-ui";
import { putNotRequired } from "../../../api/Order";
import { orderIdFromUrl } from "../../../api/helpers";

const DontSendButton = ({
  successFunction,
  errorFunction,
  isLoading,
  setIsLoading,
}) => {
  const handleDontSend = async () => {
    setIsLoading(true);
    await putNotRequired(orderIdFromUrl(), successFunction, errorFunction);
  };

  return (
    <Button size="small" onClick={handleDontSend} loading={isLoading}>
      Don't Send
    </Button>
  );
};

export default DontSendButton;
