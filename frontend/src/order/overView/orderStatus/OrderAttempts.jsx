import React from 'react';
import { Heading, Text } from '@commerce7/admin-ui';
import OrderAttemptErrors from './orderAttempts/OrderAttemptErrors';
import styled from 'styled-components';
import { dateTimeFormat } from '../../../helpers/dateHelper';

const OrderAttempts = ({ order }) => {
  if (order.attempts) {
    return (
      <div>
        <Heading marginBottom={'20px'} level={3}>
          Activity
        </Heading>
        {order.attempts.map((attempt) => {
          return (
            <StyledAttemptsContainer>
              <StyledTextContainer>
                <Text>{attempt.type}</Text>
                <Text secondary>{dateTimeFormat(attempt.attemptDate)}</Text>
              </StyledTextContainer>
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

const StyledTextContainer = styled.div`
  display: flex;
  gap: 10px;
`;
