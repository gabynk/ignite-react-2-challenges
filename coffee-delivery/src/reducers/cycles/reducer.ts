import { produce } from 'immer'
import { ActionTypes } from './actions'

export interface CartItemData {
  id: string;
  image: string;
  types: string[];
  name: string;
  description: string;
  value: number;
  quantity: number;
}

interface CartState {
  cart: CartItemData[]
}

export function cartReducer(state: CartState, action: any) {
  switch (action.type) {
    case ActionTypes.UPDATE_CART:
      return produce(state, (draft) => {
        draft.cart = (action.payload.newCart)
      })
    default:
      return state
  }
}
