import { Heading, Region } from "@commerce7/admin-ui";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { getOrder } from "../api/Order";
import { orderIdFromUrl } from "../api/helpers";
import { Page } from "../components/page/Page";
import { Actions } from "./overView/Actions";
import OrderStatus from "./overView/OrderStatus";

const OrderView = ({ setError }) => {
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const get = async () => {
      const result = await getOrder(orderIdFromUrl()).catch((error) => {});
      setOrder(result);
    };
    get();
  }, []);

  return (
    <Page>
      <Region>
        <StyledActionContainer>
          <Heading>NoFraud</Heading>
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
