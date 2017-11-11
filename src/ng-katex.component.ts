import { Component, Input } from '@angular/core';
@Component({
    selector: 'ng-katex',
    template: `<span [katex]="expression" ></span>`,
})
export class KatexComponent {

  @Input() expression: string;
}
