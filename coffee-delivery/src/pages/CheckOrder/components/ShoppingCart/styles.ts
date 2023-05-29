import styled from "styled-components";

export const ShoppingCartContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2.5rem;
  border-radius: 6px 44px;
  background: ${(props) => props.theme['gray-200']};
`;

export const AmountContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13.5px;

  & div {
    display: flex;
    justify-content: space-between;
    font-size: 0.875rem;
  }

  & div:last-child {
    font-weight: 700;
    font-size: 1.25rem;
    color: ${(props) => props.theme['gray-600']};
  }
`;

export const ConfirmOrderButton = styled.button`
  padding: 0.75rem;
  border-radius: 6px;
  text-align: center;
  text-transform: uppercase;
  background: ${(props) => props.theme['yellow-300']};
  color: ${(props) => props.theme['white']};
  border: none;
  cursor: pointer;

  &:focus {
    background: ${(props) => props.theme['yellow-400']};
  }
`;