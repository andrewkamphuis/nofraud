import { Heading, Region } from '@commerce7/admin-ui';
import styled from 'styled-components';
import { Page } from '../components/page/Page';
import OrderStatus from './overView/OrderStatus';
import { Actions } from './overView/Actions';
import { useEffect, useState } from 'react';
import { getOrder } from '../api/Order';
import { orderIdFromUrl } from '../api/helpers';
import { tenantFromURL } from '../api/helpers';
import { ButtonMenu as UIButtonMenu } from '@commerce7/admin-ui';
const { ButtonMenuItem } = UIButtonMenu;

const OrderView = ({ setError }) => {
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const get = async () => {
      const result = await getOrder(orderIdFromUrl()).catch((error) => {});
      setOrder(result);
    };
    get();
  }, []);

  const setType = (type) => {
    const newOrder = { ...order };
    newOrder.type = type;
    setOrder(newOrder);
  };

  return (
    <Page>
      {[
        'kristyna-butrymowiczova-sandbox-account',
        'noah-sandbox-account',
        'development',
        'jason-demo-site-db4'
      ].includes(tenantFromURL()) && (
        <Region>
          <UIButtonMenu>
            <ButtonMenuItem onClick={() => setType('Sent To Vinoshipper')}>
              Sent To Vinoshipper
            </ButtonMenuItem>
            <ButtonMenuItem onClick={() => setType('Not Required To Send')}>
              Not Required To Send
            </ButtonMenuItem>
            <ButtonMenuItem onClick={() => setType('Failed To Send')}>
              Failed To Send
            </ButtonMenuItem>
            <ButtonMenuItem onClick={() => setType('Voided In Vinoshipper')}>
              Voided In Vinoshipper
            </ButtonMenuItem>
          </UIButtonMenu>
        </Region>
      )}
      <Region>
        <StyledActionContainer>
          <Heading marginBottom="0px">No Fraud</Heading>
          <Actions
            setError={setError}
            order={order}
            setOrder={setOrder}
          ></Actions>
        </StyledActionContainer>
        <OrderStatus order={order}></OrderStatus>
      </Region>
    </Page>
  );
};

export default OrderView;

const StyledActionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;
