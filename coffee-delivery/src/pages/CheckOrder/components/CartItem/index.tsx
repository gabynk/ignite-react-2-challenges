import { useContext, useMemo } from 'react';
import { Trash } from 'phosphor-react';

import { CartItemData } from '../../../../reducers/cycles/reducer';
import { formatMoney } from '../../../../util/formatMoney';

import { AddOrDecreaseAmount, CartItemContainer, CoffeeAmount, ItemAmount, ItemDescription, RemoveItem } from "./styles";
import { CartContext } from '../../../../contexts/CartContext';

interface CartItemProps {
  cartItem: CartItemData;
}

export function CardItem({ cartItem }: CartItemProps) {
  const { addToCart, removeToCart } = useContext(CartContext);

  function handleAddItem() {
    addToCart(cartItem.id, 1);
  }

  function handleRemoveItem() {
    if (cartItem.quantity > 1) {
      return removeToCart(cartItem.id);
    }
    removeToCart(cartItem.id, true);
  }

  function handleRemoveItemToCart() {
    removeToCart(cartItem.id, true);
  }

  const totalValue = cartItem.quantity * cartItem.value;

  const formattedItemValue = formatMoney(totalValue);

  return (
    <CartItemContainer>
      <ItemDescription>
        <img src={cartItem.image} alt="" />
        <ItemAmount>
          {cartItem.name}
          <div>
            <CoffeeAmount>
              <AddOrDecreaseAmount onClick={handleRemoveItem}>-</AddOrDecreaseAmount>
              {cartItem.quantity}
              <AddOrDecreaseAmount onClick={handleAddItem}>+</AddOrDecreaseAmount>
            </CoffeeAmount>
            <RemoveItem onClick={handleRemoveItemToCart}>
              <Trash size={16} />
              Remover
            </RemoveItem>
          </div>
        </ItemAmount>
      </ItemDescription>

      <span>R$ {formattedItemValue}</span>
    </CartItemContainer>
  )
}
