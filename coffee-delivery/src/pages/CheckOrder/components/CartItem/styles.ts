import styled from "styled-components";

export const CartItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0.25rem 2rem;
  border-bottom: 1px solid ${(props) => props.theme['gray-300']};

  & img {
    width: 4rem;
    height: 4rem;
  }

  > span {
    font-weight: 700;
  }
`;

export const ItemDescription = styled.div`
  display: flex;
  gap: 1.25rem;
`;

export const ItemAmount = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  > div {
    display: flex;
    gap: 0.5rem;
  }
`;

export const CoffeeAmount = styled.div`
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  gap: 4px;
  font-size: 1rem;
  line-height: 1.3;
  border-radius: 6px;
  background: ${(props) => props.theme['gray-300']};
`;

export const AddOrDecreaseAmount = styled.button`
  width: 0.875rem;
  height: 0.875rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  line-height: 1.3;
  color: ${(props) => props.theme['pink-500']};
  background: transparent;
  border: none;
  cursor: pointer;

  &:focus {
    background: ${(props) => props.theme['pink-100']};
    color: ${(props) => props.theme['gray-500']};
    border: 1px solid ${(props) => props.theme['pink-500']};
    border-radius: 2px;
  }
`;

export const RemoveItem = styled.button`
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  gap: 4px;
  font-size: 1rem;
  line-height: 1.3;
  border-radius: 6px;
  background: ${(props) => props.theme['gray-300']};
  color: ${(props) => props.theme['gray-500']};
  font-size: 0.75rem;
  text-transform: uppercase;
  border: none;
  cursor: pointer;

  > svg {
    color: ${(props) => props.theme['pink-500']};
  }

  &:focus {
    background: ${(props) => props.theme['pink-100']};
    color: ${(props) => props.theme['gray-500']};
    border: 1px solid ${(props) => props.theme['pink-500']};
  }
`;