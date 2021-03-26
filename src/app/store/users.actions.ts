// 1 - Importaciones
import { Action } from '@ngrx/store'
import { User } from '../models/user'

// 2 - Definición del tipo de acción
export const AÑADIR_TASK = 'Añadir Usuario'

// 3 - Creación de la clase tipo AddTask
export class AñadirUsuario implements Action {
  readonly type = AÑADIR_TASK
  constructor(public payload: User) { }
}

// 4 - Exportación de la acción
export type Actions = AñadirUsuario