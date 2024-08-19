import React from "react";
import { Heading, Text } from "@commerce7/admin-ui";
import OrderAttemptErrors from "./orderAttempts/OrderAttemptErrors";
import styled from "styled-components";
import { LineBreak } from "@commerce7/admin-ui";
import { dateFormat } from "../../../helpers/dateHelper";

const OrderAttempts = ({ order }) => {
  if (order.attempts) {
    return (
      <div>
        <LineBreak></LineBreak>
        <Heading level={3}>Attempts</Heading>
        {order.attempts.map((attempt) => {
          return (
            <StyledAttemptsContainer>
              <Text>
                {attempt.type} - {dateFormat(attempt.attemptDate)}
              </Text>
              <OrderAttemptErrors
                attemptErrors={attempt.errors}
              ></OrderAttemptErrors>
            </StyledAttemptsContainer>
          );
        })}
      </div>
    );
  }
};

export default OrderAttempts;

const StyledAttemptsContainer = styled.div`
  margin: 20px;
`;
