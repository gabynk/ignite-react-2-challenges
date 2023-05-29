import styled from "styled-components";

export const UserPaymentContainer = styled.div`
  padding: 2.5rem;
  margin-top: 0.75rem;
  border-radius: 6px;
  background: ${(props) => props.theme['gray-200']};
`;

export const PaymentInfoDescription = styled.div`
  display: flex;
  color: ${(props) => props.theme['gray-500']};
  gap: 0.5rem;

  & svg {
    color: ${(props) => props.theme['pink-500']};
  }
  
  & div {
    display: flex;
    flex-direction: column;

    > span {
      color: ${(props) => props.theme['gray-600']};
      font-size: 0.875rem;
    }
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  margin-top: 2rem;
`;

export const PaymentButton = styled.button`
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 0.75rem;
  border-radius: 6px;
  background: ${(props) => props.theme['gray-300']};
  font-size: 0.75rem;
  text-transform: uppercase;
  border: none;
  cursor: pointer;

  & svg {
    color: ${(props) => props.theme['pink-500']};
  }

  &:disabled {
    background: ${(props) => props.theme['pink-100']};
    color: ${(props) => props.theme['gray-500']};
    border: 1px solid ${(props) => props.theme['pink-500']};
  }
`;