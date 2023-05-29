import styled from "styled-components";

export const LabelStyled = styled.label`
  visibility: hidden;
  display: none;
`;

export const InputStyled = styled.input`
  width: 100%;
  padding: 0.75rem;
  background: ${(props) => props.theme['gray-250']};
  border: 1px solid ${(props) => props.theme['gray-300']};
  border-radius: 4px;

  &::placeholder {
    color: ${(props) => props.theme['gray-400']};
  }
`;