import * as TaskActions from './tasks.actions';
// 2 - Estado inicial
const initialState = {
    name: 'Primera tarea',
    state: 'Pendiente'
};
// 3 - Switch con las funciones puras
export function taskReducer(state = [initialState], action) {
    switch (action.type) {
        case TaskActions.ADD_TASK:
            return [...state, action.payload];
        default:
            return state;
    }
}
//# sourceMappingURL=tasks.reducer.js.map