// 1 - Importaciones
import { Action } from '@ngrx/store'
import { Tio } from '../models/tio'

// 2 - Definición del tipo de acción
export const INICIO_TASK = 'Login Usuario'
export const REGISTRO_TASK = 'Registro Usuario'
// 3 - Creación de la clase tipo AddTask
export class InicioUsuario implements Action {
  readonly type = INICIO_TASK
  constructor(public payload: Tio) { }
}

export class RegistroUsuario implements Action {
    readonly type = REGISTRO_TASK
    constructor(public payload: Tio) { }
  }

// 4 - Exportación de la acción
export type Actions = InicioUsuario | RegistroUsuario