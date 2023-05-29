import {
  ReactNode,
  createContext,
  useEffect,
  useReducer,
} from 'react'
import { UserData, UserLocaleData, userReducer } from '../reducers/user/reducer'
import { addUserAction, removeAction } from '../reducers/user/actions'

interface UserContextType {
  user: UserData
  userLocale: UserLocaleData
  addUser: (userData: UserData) => void
  removeUser: () => void
}

export const UserContext = createContext({} as UserContextType)

interface UserContextProviderProps {
  children: ReactNode
}

export function UserContextProvider({
  children,
}: UserContextProviderProps) {
  const [userState, dispatch] = useReducer(
    userReducer,
    {
      user: {},
      userLocale: {}
    },
    (initialState) => {
      const storedStateAsJSON = localStorage.getItem(
        '@coffee:user-1.0.0',
      )
      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }
      return initialState
    },
  )

  const { user, userLocale } = userState

  useEffect(() => {
    const stateJSON = JSON.stringify(userState)

    localStorage.setItem('@coffee:user-1.0.0', stateJSON)
  }, [userState])

  async function addUser(userData: UserData) {
    const userLocale = {
      city: userData.city,
      state: userData.state
    }
    localStorage.setItem('@coffee:cart-1.0.0', JSON.stringify({ user: {}, userLocale }));
    dispatch(addUserAction(userData, userLocale))
  }

  async function removeUser() {
    dispatch(removeAction())
  }

  return (
    <UserContext.Provider
      value={{
        user,
        userLocale,
        addUser,
        removeUser,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}