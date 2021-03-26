// 1 - Importaciones
import { User } from '../models/user'
import * as UserActions from './users.actions'

// 2 - Estado inicial
const initialState: User = {
    id: 1,
    username: "luis13711",
    password: "123456",
    firstName: "Luis",
    lastName: "Correa"
}

// 3 - Switch con las funciones puras
export function userReducer(state: User[] = [initialState], action: UserActions.Actions) {
  switch (action.type) {
    case UserActions.AÑADIR_TASK:
      return [...state, action.payload];
    default:
      return state;
  }
}