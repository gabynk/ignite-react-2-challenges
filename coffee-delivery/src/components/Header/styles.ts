import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 6.5rem;
  margin: 0 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & img {
    cursor: pointer;
  }
`

export const DeliveryInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
`

export const Button = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: none;
  border-radius: 6px;
  padding: 0.5rem;
  gap: 8px;
  font-size: 0.875rem;
`

export const LocaleButton = styled(Button)`
  background: ${(props) => props.theme['pink-100']};
  color: ${(props) => props.theme['pink-500']};
`