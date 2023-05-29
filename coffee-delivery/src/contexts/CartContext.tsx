import {
  ReactNode,
  createContext,
  useEffect,
  useReducer,
} from 'react'
import { CartItemData, cartReducer } from '../reducers/cycles/reducer'
import { updateCartAction } from '../reducers/cycles/actions'
import api from '../services/api'

interface CartContextType {
  cart: CartItemData[]
  addToCart: (id: string, quantity: number) => void
  removeToCart: (id: string, removeItem?: boolean) => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({
  children,
}: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(
    cartReducer,
    {
      cart: []
    },
    (initialState) => {
      const storedStateAsJSON = localStorage.getItem(
        '@coffee:cart-1.0.0',
      )
      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }
      return initialState
    },
  )

  const { cart } = cartState

  useEffect(() => {
    const stateJSON = JSON.stringify(cartState)

    localStorage.setItem('@coffee:cart-1.0.0', stateJSON)
  }, [cartState])

  async function getShoppingItem(id: string, quantity: number) {
    try {
      const product = await api.get(`/coffees/${id}`).then(response => response.data);
      const newProduct = { ...product, quantity };

      return newProduct;
    } catch (error) {
      alert('Oops, ocorreu um erro na adição do produto');
    }
  }

  async function addToCart(id: string, quantity: number) {
    if (!!cart.length) {
      const productFound = cart.find((item) => item.id === id);

      if (productFound) {
        const newCart = cart.map((item) => {
          if (item.id === productFound.id) {
            return {
              ...item,
              quantity: item.quantity + quantity
            }
          }

          return item
        });

        dispatch(updateCartAction(newCart))
        localStorage.setItem('@coffee:cart-1.0.0', JSON.stringify({ cart: newCart }));

        return;
      }
    }

    const newItem = await getShoppingItem(id, quantity);
    const newCart = [...cart, newItem];
    dispatch(updateCartAction(newCart));
    localStorage.setItem('@coffee:cart-1.0.0', JSON.stringify({ cart: newCart }));
  }

  async function removeToCart(id: string, removeItem = false) {
    const productFound = cart.find((item) => item.id === id);

    if (!removeItem && productFound && productFound?.quantity > 1) {
      const newCart = cart.map((item) => {
        if (item.id === productFound.id) {
          return {
            ...item,
            quantity: item.quantity - 1
          }
        }

        return item
      });

      dispatch(updateCartAction(newCart))
      localStorage.setItem('@coffee:cart-1.0.0', JSON.stringify({ cart: newCart }));

      return;
    }

    const updatedCart = cart.filter((item) => item.id !== id);

    dispatch(updateCartAction(updatedCart));
    localStorage.setItem('@coffee:cart-1.0.0', JSON.stringify({ cart: updatedCart }));
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}