import { Task } from './tasks/task.model';
import { Tio } from './models/tio'
export interface AppState {
  readonly tasks: Task[];
  readonly tios: Tio[];
  readonly login: Tio[];
}