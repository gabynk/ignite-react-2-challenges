import styled from "styled-components";

const ICON_COLORS = {
  orange: 'yellow-400',
  yellow: 'yellow-300',
  gray: 'gray-500',
  pink: 'pink-500',
} as const

interface IntroProps {
  iconColor: keyof typeof ICON_COLORS
}

export const IconBox = styled.div<IntroProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  padding: 0.5rem;
  border-radius: 50%;
  background: ${(props) => props.theme[ICON_COLORS[props.iconColor]]};
  color: ${(props) => props.theme['gray-100']};
`