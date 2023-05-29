import { ShoppingCart } from "phosphor-react";
import { ButtonHTMLAttributes, useContext, useMemo } from "react";

import { CartContext } from "../../contexts/CartContext";
import { ButtonContainer, CartQuantity } from "./styles";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  iconColor: 'orange' | 'yellow' | 'gray' | 'lightGray' | 'pink';
  bgColor: 'orange' | 'yellow' | 'lightYellow' | 'gray' | 'pink';
  hasCounter?: boolean;
}

export function ShoppingCartButton({ iconColor, bgColor, hasCounter = false, ...props }: IconButtonProps) {
  const { cart } = useContext(CartContext);

  const totalProductItens = useMemo(() => {
    return cart.reduce((sumTotal, product) => {
      return sumTotal += product.quantity
    }, 0)
  }, [cart])

  return (
    <ButtonContainer iconColor={iconColor} bgColor={bgColor} {...props}>
      <ShoppingCart size={22} weight="fill" />
      {hasCounter && <CartQuantity bgColor={iconColor}>{totalProductItens}</CartQuantity>}
    </ButtonContainer>
  )
}