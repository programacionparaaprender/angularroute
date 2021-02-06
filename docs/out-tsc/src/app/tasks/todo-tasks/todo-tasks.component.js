import { __awaiter, __decorate } from "tslib";
import { Component } from '@angular/core';
/* import { AddTaskComponent } from './tasks/add-task/add-task.component';
import { ListTasksComponent } from './tasks/list-tasks/list-tasks.component'; */
import axios from 'axios';
//const api = localStorage.getItem('URL') + 'api/actividad';
const api = 'https://localhost:44382/' + 'api/actividad';
let TodoTasksComponent = class TodoTasksComponent {
    constructor() { }
    ngOnInit() {
    }
    // Disparamos la acción
    addTask() {
        return __awaiter(this, void 0, void 0, function* () {
            var response;
            try {
                response = yield axios.get(api, {
                    params: {
                        empresaId: 1
                    }
                });
                if (response.status == 200) {
                    alert(JSON.stringify(response.data));
                }
            }
            catch (error) {
                alert(error);
            }
        });
    }
};
TodoTasksComponent = __decorate([
    Component({
        selector: 'app-todo-tasks',
        templateUrl: './todo-tasks.component.html',
        styleUrls: ['./todo-tasks.component.css']
    })
], TodoTasksComponent);
export { TodoTasksComponent };
//# sourceMappingURL=todo-tasks.component.js.map