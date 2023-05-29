import styled from "styled-components";

export const CheckOrderContainer = styled.div`
  margin: 2.5rem 10rem;
  display: flex;
  gap: 2rem;
`;

export const Title = styled.h1`
  font-family: 'Baloo 2', monospace;
  color: ${(props) => props.theme['gray-600']};
  font-size: 1.125rem;
  margin-bottom: 1rem;
`;

export const UserInfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ShoppingCartInfoContainer = styled.div`
  min-width: 28rem;
  display: flex;
  flex-direction: column;
`;