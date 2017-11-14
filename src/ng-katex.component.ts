import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import * as ko from './ng-katex.options';

@Component({
  selector: 'ng-katex',
  template: `
    <span [katex]="equation"
          [katex-options]="options"
          (someEvent)="hasError($event)">
    </span>
  `,
  styleUrls: ['./../node_modules/katex/dist/katex.min.css'],
  encapsulation: ViewEncapsulation.Native,
})
export class KatexComponent {

  @Input() equation: string;
  @Input() options?: ko.KatexOptions;
  @Output() onError = new EventEmitter<any>();

  hasError(error) {
    this.onError.emit(error);
  }
}
