// 1 - Importaciones
import { User } from '../models/user'
import * as LoginActions from './login.actions'


// 2 - Estado inicial
const initialState: User = {
    id: 1,
    username: "error",
    password: "123456",
    firstName: "Luis",
    lastName: "Correa"
}
// localStorage.getItem('URL');
// 3 - Switch con las funciones puras
export function loginReducer(state: User[] = [initialState], action: LoginActions.Actions) {
  switch (action.type) {
    case LoginActions.INICIO_TASK:

        return [action.payload];
    case LoginActions.REGISTRO_TASK:

        return [action.payload];
    default:
        return state;
  }
}