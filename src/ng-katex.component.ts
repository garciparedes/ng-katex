import { Component, Input } from '@angular/core';

@Component({
    selector: 'ng-katex',
    template: `<span [Katex]="expression">{{expression}}</span>`
})
export class KatexComponent {

  @Input() expression: string;
}
