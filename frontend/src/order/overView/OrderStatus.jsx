import OrderAttempts from './orderStatus/OrderAttempts';
import { Alert, Text } from '@commerce7/admin-ui';

const OrderStatus = ({ order }) => {
  if (!order) {
    return <Text>Order not found in NoFraud. Please retry syncing.</Text>;
  }

  return (
    <>
      <Alert variant={getAlertVariant(order.type)}>
        <Text strong>{order.type}</Text> - {getSyncText(order.type)}
      </Alert>
      <OrderAttempts order={order}></OrderAttempts>
    </>
  );
};

export default OrderStatus;

const getSyncText = (type) => {
  let syncText = '';
  switch (type) {
    case 'Pass':
      syncText = `This order has passed NoFraud's fraud detection and has been deemed a legitimate order.`;
      break;
    case 'Needs Review':
      syncText =
        'This order needs review as NoFraud can not guarantee its legitimacy.';
      break;
    case 'Fail':
      syncText =
        'This order has failed NoFraud fraud detection  and has been deemed a illegitimate order.';
      break;
    case 'Cancelled':
      syncText = 'This order has been cancelled.';
      break;
    case 'Not Required':
      syncText = 'This order does not require NoFraud verification.';
      break;
    default:
      break;
  }
  return syncText;
};

const getAlertVariant = (type) => {
  if (type === 'Fail') {
    return 'error';
  }
  if (type === 'Pass') {
    return 'success';
  }
  if (type === 'Needs Review') return 'warning';
  return 'default';
};
