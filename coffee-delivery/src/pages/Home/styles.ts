import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100vw;
  flex-direction: column;
  background: ${(props) => props.theme['gray-100']};
`;

export const HomeContent = styled.div`
  margin: 0 10rem;
  padding-bottom: 9.8rem;
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme['gray-100']};

  > span {
    font-family: 'Baloo 2', monospace;
    font-size: 2rem;
    margin: 2rem 0 3.375rem 0;
  }
`;

export const CoffeeCards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2rem;
  grid-gap: 2.5rem;
`;