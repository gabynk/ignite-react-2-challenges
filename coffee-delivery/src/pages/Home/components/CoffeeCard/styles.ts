import styled from "styled-components";

export const CoffeeCardContainer = styled.div`
  width: 16rem;
  height: 19.375rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme['gray-200']};
  border-radius: 6px 36px;
  padding: 1.25rem;
  font-size: 0.875rem;

  > img {
    width: 7.5rem;
    height: 7.5rem;
    margin-bottom: 0.75rem;
  }
`;

export const CoffeeTypes = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const CoffeeType = styled.div`
  font-size: 0.625rem;
  font-weight: 700;
  color: ${(props) => props.theme['yellow-400']};
  background: ${(props) => props.theme['yellow-100']};
  padding: 0.25rem 0.5rem;
  border-radius: 100px;
  `;

export const CoffeeName = styled.span`
  color: ${(props) => props.theme['gray-600']};
  font-family: 'Baloo 2', monospace;
  font-size: 1.25rem;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  line-height: 1.625;
`;

export const CoffeeDescription = styled.span`
  font-family: 'Roboto', sans-serif;
  text-align: center;
  color: ${(props) => props.theme['gray-400']};
`;

export const CoffeeCar = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-top: 2.0625rem;
  margin-bottom: 1.25rem;
`;

export const ValueAmount = styled.div`
  > span {
    color: ${(props) => props.theme['gray-600']};
    font-family: 'Baloo 2', monospace;
    font-size: 1.5rem;
  }
`;

export const CarInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const CoffeeAmount = styled.div`
  height: 2.375rem;
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
  font-size: 1rem;
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