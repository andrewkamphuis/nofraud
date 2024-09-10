import React from "react";
import { Button } from "@commerce7/admin-ui";
import { putVoid } from "../../../api/Order";
import { orderIdFromUrl } from "../../../api/helpers";

const Void = ({ isLoading, setIsLoading, setOrder }) => {
  const onError = () => {
    setIsLoading(false);
  };

  const onSuccess = (data) => {
    setIsLoading(false);
    setOrder(data);
  };

  const handleVoidSync = async () => {
    setIsLoading(true);
    await putVoid(orderIdFromUrl(), onSuccess, onError);
  };

  return (
    <Button size="small" onClick={handleVoidSync} loading={isLoading}>
      Void Sync
    </Button>
  );
};

export default Void;
