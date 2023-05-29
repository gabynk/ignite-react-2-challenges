import { UserData, UserLocaleData } from "./reducer"

export enum ActionTypes {
  ADD_USER = 'ADD_USER',
  REMOVE_USER = 'REMOVE_USER',
}

export function addUserAction(user: UserData, userLocale: UserLocaleData) {
  return {
    type: ActionTypes.ADD_USER,
    payload: {
      user,
      userLocale,
    },
  }
}

export function removeAction() {
  return {
    type: ActionTypes.REMOVE_USER,
  }
}
