import styled from "styled-components";

export const UserAddressContainer = styled.div`
  padding: 2.5rem;
  border-radius: 6px;
  background: ${(props) => props.theme['gray-200']};

  & form {
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    gap: 1rem;
  }
`;

export const UserInfoDescription = styled.div`
  display: flex;
  color: ${(props) => props.theme['gray-500']};
  gap: 0.5rem;

  & svg {
    color: ${(props) => props.theme['yellow-400']};
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

export const InputRow = styled.div`
  display: flex;
  gap: 0.75rem;
`;

export const HalfWidthInput = styled.div`
  min-width: 12.5rem;
  max-width: 12.5rem;
`;

export const SmallWidthInput = styled.div`
  min-width: 3.75rem;
  max-width: 3.75rem;
`;