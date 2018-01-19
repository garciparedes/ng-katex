import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as ko from './ng-katex.options';

@Component({
  selector: 'ng-katex-paragraph',
  template: `
  
  `
})
export class KatexParagraphComponent {

  @Input() paragraph: string;
  @Output() onError = new EventEmitter<any>();

  hasError(error) {
    this.onError.emit(error);
  }
}
