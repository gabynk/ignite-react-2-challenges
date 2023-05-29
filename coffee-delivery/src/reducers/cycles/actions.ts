import { CartItemData } from './reducer'

export enum ActionTypes {
  UPDATE_CART = 'UPDATE_CART',
}

export function updateCartAction(newCart: CartItemData[]) {
  return {
    type: ActionTypes.UPDATE_CART,
    payload: {
      newCart,
    },
  }
}
