import { Component, Input } from '@angular/core';

@Component({
  selector: 'ng-katex',
  template: `<span [katex]="expression" [katex-options]="options"></span>`,
})
export class KatexComponent {

  @Input() expression: string;
  @Input() options?: any;

}
