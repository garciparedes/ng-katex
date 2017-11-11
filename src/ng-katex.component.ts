import { Component, Input } from '@angular/core';

@Component({
  selector: 'ng-katex',
  template: `<span [katex]="equation" [katex-options]="options"></span>`,
})
export class KatexComponent {

  @Input() equation: string;
  @Input() options?: any;

}
