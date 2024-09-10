import React from "react";
import { Button } from "@commerce7/admin-ui";
import { putSync } from "../../../api/Order";
import { orderIdFromUrl } from "../../../api/helpers";

const RetryButton = ({
  successFunction,
  errorFunction,
  isLoading,
  setIsLoading,
}) => {
  const handleRetrySyncing = async () => {
    setIsLoading(true);
    await putSync(orderIdFromUrl(), successFunction, errorFunction);
  };

  return (
    <Button size="small" onClick={handleRetrySyncing} loading={isLoading}>
      Retry Syncing
    </Button>
  );
};

export default RetryButton;
