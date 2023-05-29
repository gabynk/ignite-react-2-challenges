import { useContext, useMemo } from "react";
import { useFormikContext, FormikProps } from 'formik';

import { CardItem } from "../CartItem";
import { CartContext } from "../../../../contexts/CartContext";

import { AmountContainer, ConfirmOrderButton, ShoppingCartContainer } from "./styles";
import { formatMoney } from "../../../../util/formatMoney";
import { InitialFormikValue } from "../..";

export function ShoppingCart() {
  const { cart } = useContext(CartContext);
  const { handleSubmit } = useFormikContext() as FormikProps<InitialFormikValue>;

  const totalProductValue = useMemo(() => {
    return cart.reduce((totalValue, product) => {
      return totalValue += product.value * product.quantity
    }, 0)
  }, [cart])

  const totalCartValue = totalProductValue > 0 ? totalProductValue + 3.50 : 0;

  return (
    <ShoppingCartContainer>
      {!!cart.length && cart.map(item => {
        return (
          <CardItem key={item.id} cartItem={item} />
        )
      })}

      <AmountContainer>
        <div>
          Total de itens
          <span>R$ {formatMoney(totalProductValue)}</span>
        </div>
        <div>
          Entrega
          <span>R$ 3,50</span>
        </div>
        <div>
          Total
          <span>R$ {formatMoney(totalCartValue)}</span>
        </div>
      </AmountContainer>

      <ConfirmOrderButton type="submit" onClick={() => handleSubmit()}>
        confirmar pedido
      </ConfirmOrderButton>
    </ShoppingCartContainer>
  )
}