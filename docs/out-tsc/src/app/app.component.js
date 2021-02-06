import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
let AppComponent = class AppComponent {
    constructor() {
        this.title = 'angularrouter';
        this.brandControl = new FormControl('', [Validators.required]);
        this.selectFormControl = new FormControl('', Validators.required);
        this.brands = [
            { value: 1, viewValue: 'Louis Vuitton' },
            { value: 2, viewValue: 'Gucci' },
            { value: 3, viewValue: 'Prada' },
            { value: 4, viewValue: 'Chanel' },
        ];
    }
};
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map