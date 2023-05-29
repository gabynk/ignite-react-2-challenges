import styled from "styled-components";

export const DashboardContainer = styled.div`
  width: 100%;
  height: 34rem;
  display: flex;
  align-items: center;
  padding: 0;
  background-image: url('src/assets/background.png');
  background-size: cover;
  background-repeat: no-repeat;
`

export const DashboardContent = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 3.5rem;
  margin: 0 10rem;

  img {
    width: 476px;
    height: 360px;
  }
`

export const Descriptions = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled.h1`
  font-family: 'Baloo 2', monospace;
  color: ${(props) => props.theme['gray-700']};
  font-size: 3rem;
`

export const Subtitle = styled.h2`
  font-size: 1.25rem;
  margin: 1rem 0 4.125rem 0;
  color: ${(props) => props.theme['gray-600']};
`

export const Options = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2.5rem;
`

export const Option = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1rem;
`