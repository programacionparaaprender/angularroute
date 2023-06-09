/* eslint-disable @typescript-eslint/no-empty-function */
import { Directive, HostListener, Input } from '@angular/core';

@Directive({
    // eslint-disable-next-line @angular-eslint/directive-selector
    selector: '[inputNumericFilter]'
})
export class NumeroDirective {
    @Input('inputNumericFilter') params = '';
    constructor() {}
    @HostListener('keypress', ['$event'])
    validateFormat(event: any) {
        let key;
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        if (event.type === 'paste') {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
            key = event.clipboardData.getData('text/plain');
        } else {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
            key = event.keyCode;
            key = String.fromCharCode(key);
        }
        const regex = /[0-9]|\./;
        if (!regex.test(key)) {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            event.returnValue = false;
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            if (event.preventDefault) {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
                event.preventDefault();
            }
        }
    }
}