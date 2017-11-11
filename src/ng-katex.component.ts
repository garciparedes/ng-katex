import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ng-katex',
  template: `<span [katex]="equation" [katex-options]="options"></span>`,
  styleUrls: ['../node_modules/katex/dist/katex.min.css'],
  encapsulation: ViewEncapsulation.Native
})
export class KatexComponent {

  @Input() equation: string;
  @Input() options?: any;

}
