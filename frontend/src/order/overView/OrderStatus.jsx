import { Text } from "@commerce7/admin-ui";
import OrderAttempts from "./orderStatus/OrderAttempts";

const OrderStatus = ({ order }) => {
  if (!order) {
    return <Text>Order not found in NoFraud. Please retry syncing.</Text>;
  }

  return (
    <>
      <Text block>{getSyncText(order.type)}</Text>
      <OrderAttempts order={order}></OrderAttempts>
    </>
  );
};

export default OrderStatus;

const getSyncText = (type) => {
  let syncText = "";
  switch (type) {
    case "Not Required To Send":
      syncText =
        "Order has not been sent to NoFraud, because the order is being carried-out/shipped/picked-up in a state which is not selected in your NoFraud settings.";
      break;
    case "Not sent": //TODO review enums with andrew
      syncText =
        "Order has not been sent to NoFraud yet.  Click Retry Sync to send.";
      break;
    case "Sent but errored": //TODO review enums with andrew
    case "Failed To Send":
      syncText =
        "Order has failed being sent to NoFraud. Please Retry Syncing.";
      break;
    case "Dont Send": //TODO review enums with andrew
      syncText =
        "Order has failed being sent to NoFraud and has been set to Dont Send status.";
      break;
    case "Success": //TODO review enums with andrew
    case "Sent To NoFraud":
      syncText = "Order has been successfully sent to NoFraud.";
      break;
    case "Voided In NoFraud":
      syncText = "Order has been voided in NoFraud.";
      break;
    default:
      break;
  }
  return syncText;
};
