import { produce } from 'immer'
import { ActionTypes } from './actions'

export type CashType = 'CREDIT' | 'DEBID' | 'CASH';

export interface UserData {
  cep: string;
  street: string;
  houseNumber: string;
  complement: string;
  neighborhood: string;
  city: string;
  state: string;
  paymentType: CashType;
}

export interface UserLocaleData {
  city: string;
  state: string;
}

interface UserState {
  user: UserData
  userLocale: UserLocaleData
}

export function userReducer(state: UserState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_USER:
      return produce(state, (draft) => {
        draft.user = (action.payload.user);
        draft.userLocale = (action.payload.userLocale);
      })
    case ActionTypes.REMOVE_USER:
      return produce(state, (draft) => {
        draft.user = (state.user)
      })
    default:
      return state
  }
}
