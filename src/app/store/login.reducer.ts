// 1 - Importaciones
import { EmailValidator } from '@angular/forms'
import { Tio } from '../models/tio'
import * as LoginActions from './login.actions'


// 2 - Estado inicial
const initialState: Tio = {
    id: 1,
    nombre: "error",
    password: "123456",
    email: "error@gmail.com"
}
//localStorage.setItem('login', JSON.stringify(initialState))

// localStorage.getItem('URL');
// 3 - Switch con las funciones puras
export function loginReducer(state: Tio[] = [initialState], action: LoginActions.Actions) {
  switch (action.type) {
    case LoginActions.INICIO_TASK:
        console.log('action.payload login')
        console.log(JSON.stringify(action.payload))
        
        const usuario = {
            id:action.payload.id,
            nombre:action.payload.nombre,
            email:action.payload.email,
            password:action.payload.password
        }

        localStorage.setItem('login', JSON.stringify(usuario))

        return [action.payload];
    case LoginActions.REGISTRO_TASK:
        console.log('action.payload registro')
        console.log(JSON.stringify(action.payload))
        
        const usuario2 = {
            id:action.payload.id,
            nombre:action.payload.nombre,
            email:action.payload.email,
            password:action.payload.password
        }

        localStorage.setItem('login', JSON.stringify(usuario2))

        return [action.payload];
    default:
        //localStorage.setItem('login', JSON.stringify(initialState))
        return state;
  }
}