import styled from "styled-components";

const ICON_COLORS = {
  orange: 'yellow-400',
  yellow: 'yellow-300',
  gray: 'gray-500',
  lightGray: 'gray-200',
  pink: 'pink-500',
} as const

const BG_COLORS = {
  orange: 'yellow-400',
  yellow: 'yellow-300',
  lightYellow: 'yellow-100',
  gray: 'gray-500',
  pink: 'pink-500',
} as const

interface CartButtonProps {
  iconColor: keyof typeof ICON_COLORS,
  bgColor: keyof typeof BG_COLORS,
}

export const ButtonContainer = styled.button<CartButtonProps>`
  width: 2.375rem;
  height: 2.375rem;
  border-radius: 6px;
  padding: 0.5rem;
  color: ${(props) => props.theme[ICON_COLORS[props.iconColor]]};
  background: ${(props) => props.theme[BG_COLORS[props.bgColor]]};
  border: none;
  cursor: pointer;
`;

interface CartQuantityProps {
  bgColor: keyof typeof ICON_COLORS,
}

export const CartQuantity = styled.div<CartQuantityProps>`
  width: 1.25rem;
  height: 1.25rem;
  background: red;
  border-radius: 50%;
  position: relative;
  bottom: 41px;
  left: 19px;
  padding: 2px;
  font-size: 0.75rem;
  color: ${(props) => props.theme['white']};
  background: ${(props) => props.theme[ICON_COLORS[props.bgColor]]};
`;