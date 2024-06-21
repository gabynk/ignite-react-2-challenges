import { Product } from '@/pages/product/[id]';
import { createContext, ReactNode, useContext, useState } from 'react';

type CheckoutCartData = {
  price: string
  quantity: number
}

interface CheckoutCartFormattedData extends CheckoutCartData {
  id: string
}

interface CartProviderProps {
  children: ReactNode;
}

interface CartContextData {
  cart: Product[];
  addProduct: (productId: Product) => Promise<void>;
  removeProduct: (productId: string) => void;
  getFormattedCarts: () => CheckoutCartData[] | null;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<Product[]>([]);

  const addProduct = async (product: Product) => {
    const updatedCart = [...cart, product]
    setCart(updatedCart);
  };

  const removeProduct = (productId: string) => {
    try {
      const productIndex = cart.findIndex((product) => product.id === productId);

      if (productIndex !== -1) {
        const newCart = [...cart];
        newCart.splice(productIndex, 1);
        setCart(newCart);
        return
      }

      alert('Erro na remoção do produto');
    } catch {
      alert('Erro na remoção do produto');
    }
  };

  const getFormattedCarts = () => {
    if (cart.length < 0) {
      return null
    }

    const formattedCart: CheckoutCartFormattedData[] = []
    for (let i = 0; i < cart.length; i++) {
      if (formattedCart.length < 0) {
        formattedCart.push({
          id: cart[i].id,
          price: cart[i].defaultPriceId,
          quantity: 1,
        })
      } else {
        const existeCart = formattedCart.findIndex(item => item.id === cart[i].id)

        if (existeCart !== -1) {
          formattedCart[existeCart].quantity++;
        } else {
          formattedCart.push({
            id: cart[i].id,
            price: cart[i].defaultPriceId,
            quantity: 1,
          })
        }
      }
    }

    return formattedCart.map(item => {
      return {
        price: item.price,
        quantity: item.quantity,
      }
    })
  }

  return (
    <CartContext.Provider
      value={{ cart, addProduct, removeProduct, getFormattedCarts }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextData {
  const context = useContext(CartContext);

  return context;
}
