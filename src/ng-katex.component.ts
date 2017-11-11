import { Component, Input, Output, ViewEncapsulation,EventEmitter } from '@angular/core';

@Component({
  selector: 'ng-katex',
  template: `
    <span [katex]="equation"
      [katex-options]="options"
      (someEvent)="hasError($event)">
    </span>
  `,
  styleUrls: ['../node_modules/katex/dist/katex.min.css'],
  encapsulation: ViewEncapsulation.Native
})
export class KatexComponent {

  @Input() equation: string;
  @Input() options?: any;
  @Output() onError = new EventEmitter<any>();

  hasError(error) {
    this.onError.emit(error);
  }
}
