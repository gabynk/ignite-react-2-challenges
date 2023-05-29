import styled from "styled-components";

export const OrderSuccessContainer = styled.div`
  margin: 5rem 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > img {
    width: 30.75rem;
    height: 18.31rem;
  }
`;

export const OrderInfoContent = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: ${(props) => props.theme['gray-600']};
  font-size: 1.25rem;

  > h1 {
    font-family: 'Baloo 2', monospace;
    font-size: 2rem;
    color: ${(props) => props.theme['yellow-400']};
    line-height: 2.6;
  }
`;

export const OrderInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2.5rem;
  padding: 2.5rem;
  gap: 2rem;
  font-size: 1rem;
  line-height: 1.3;
  border-radius: 6px 36px;
  border: 1px solid #0000;
  background:
    linear-gradient(
      ${({ theme }) => theme['gray-100']}, 
      ${({ theme }) => theme['gray-100']}) padding-box,
    linear-gradient(to bottom right, #DBAC2C, #8047F8) border-box;

  & div {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  `;

export const InfoItemDescription = styled.p`

  & span {
    font-weight: 700;
  }
`;