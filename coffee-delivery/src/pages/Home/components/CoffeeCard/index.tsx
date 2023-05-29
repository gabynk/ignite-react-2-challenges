import { useContext, useMemo, useState } from 'react';

import { ShoppingCartButton } from '../../../../components/ShoppingCartButton';

import { AddOrDecreaseAmount, CarInfo, CoffeeAmount, CoffeeCar, CoffeeCardContainer, CoffeeDescription, CoffeeName, CoffeeType, CoffeeTypes, ValueAmount } from "./styles";
import { CartContext } from '../../../../contexts/CartContext';
import { formatMoney } from '../../../../util/formatMoney';

interface CoffeeData {
  id: string;
  image: string;
  types: string[];
  name: string;
  description: string;
  value: number;
  quantity: number;
}

interface CoffeeCardProps {
  coffee: CoffeeData;
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const { addToCart } = useContext(CartContext);

  const [itemQuantity, setItemQuantity] = useState(1);

  function handleAddItem() {
    setItemQuantity(quantity => quantity + 1);
  }

  function handleRemoveItem() {
    setItemQuantity(quantity => {
      if (quantity === 1) {
        return quantity;
      }

      return quantity - 1;
    });
  }

  function handleUpdateItemToCart() {
    addToCart(coffee.id, itemQuantity);
    setItemQuantity(1);
  }

  const coffeeValue = useMemo(() => {
    return formatMoney(coffee.value);
  }, [])

  return (
    <CoffeeCardContainer>
      <img src={coffee.image} alt="" />

      <CoffeeTypes>
        {coffee.types.map(type => {
          return (
            <CoffeeType key={type}>{type}</CoffeeType>
          )
        })}
      </CoffeeTypes>

      <CoffeeName>
        {coffee.name}
      </CoffeeName>

      <CoffeeDescription>
        {coffee.description}
      </CoffeeDescription>

      <CoffeeCar>
        <ValueAmount>
          R$ <span>{coffeeValue}</span>
        </ValueAmount>

        <CarInfo>
          <CoffeeAmount>
            <AddOrDecreaseAmount onClick={handleRemoveItem}>-</AddOrDecreaseAmount>
            {itemQuantity}
            <AddOrDecreaseAmount onClick={handleAddItem}>+</AddOrDecreaseAmount>
          </CoffeeAmount>

          <ShoppingCartButton
            bgColor="pink"
            iconColor="lightGray"
            onClick={handleUpdateItemToCart}
          />
        </CarInfo>
      </CoffeeCar>
    </CoffeeCardContainer>
  )
}