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
        {getBulletPoints(order.type)}
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
      syncText = `The order has been deemed low-risk, and can be fulfilled.`;
      break;
    case 'Needs Review':
      syncText =
        'The transaction has high-risk characteristics but has the potential to be a valid transaction, and is reviewed by a NoFraud analyst. Orders in the Review status should not be fulfilled until the results of the review are complete.';
      break;
    case 'Fail':
      syncText =
        'The order has been deemed high-risk, and likely fraudulent. The order should be canceled and refunded.';
      break;
    case 'Cancelled':
      syncText = 'This order has been cancelled.';
      break;
    case 'Not Required':
      syncText =
        'This order does not require NoFraud verification as it’s not a WEB channel order.';
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

const getBulletPoints = (type) => {
  if (type === 'Fail') {
    return (
      <ul>
        <li>
          Automated fulfillment & fulfillment integrations: The order will pass
          without interruptions into your fulfillment centre, please void the
          order immediately to avoid shipping the order out.
        </li>
      </ul>
    );
  }
  return null;
};
