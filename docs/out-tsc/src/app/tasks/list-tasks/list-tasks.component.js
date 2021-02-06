import { __decorate } from "tslib";
import { Component } from '@angular/core';
let ListTasksComponent = class ListTasksComponent {
    constructor(store) {
        this.store = store;
        // Accedemos a la store:
        this.tasks = this.store.select('tasks');
    }
    ngOnInit() {
    }
};
ListTasksComponent = __decorate([
    Component({
        selector: 'app-list-tasks',
        templateUrl: './list-tasks.component.html',
        styleUrls: ['./list-tasks.component.css']
    })
], ListTasksComponent);
export { ListTasksComponent };
//# sourceMappingURL=list-tasks.component.js.map