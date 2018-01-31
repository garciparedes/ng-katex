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
  templateUrl: './ng-katex.component.html',
  styleUrls: ['./ng-katex.component.scss'],
})
export class KatexComponent {

  @Input() equation: string;
  @Input() options?: ko.KatexOptions;
  @Output() onError = new EventEmitter<any>();

  hasError(error) {
    this.onError.emit(error);
  }
}
