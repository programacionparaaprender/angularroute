import { __decorate } from "tslib";
// Importaciones
import { Component } from '@angular/core';
import * as TaskActions from './../../store/tasks.actions';
let AddTaskComponent = class AddTaskComponent {
    constructor(store) {
        this.store = store;
    }
    ngOnInit() {
    }
    // Disparamos la acción
    addTask(name, state) {
        this.store.dispatch(new TaskActions.AddTask({ name: name, state: state }));
    }
};
AddTaskComponent = __decorate([
    Component({
        selector: 'app-add-task',
        templateUrl: './add-task.component.html',
        styleUrls: ['./add-task.component.css']
    })
], AddTaskComponent);
export { AddTaskComponent };
//# sourceMappingURL=add-task.component.js.map