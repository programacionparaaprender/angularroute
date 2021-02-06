// 2 - Definición del tipo de acción
export const ADD_TASK = 'Add task';
// 3 - Creación de la clase tipo AddTask
export class AddTask {
    constructor(payload) {
        this.payload = payload;
        this.type = ADD_TASK;
    }
}
//# sourceMappingURL=tasks.actions.js.map