import {
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { KatexService } from './ng-katex.service';
import { KatexOptions } from 'katex';

@Directive({
  selector: '[katex]',
})
export class KatexDirective {

  @Input('katex') equation: string;
  @Input('katex-options') options: KatexOptions;

  @Output() onError = new EventEmitter<any>();

  constructor(private el: ElementRef,
              private katexService: KatexService) {}

  ngOnChanges() {
    try {
      this.katexService.render(this.equation, this.el, this.options);
    } catch (e) {
      this.onError.emit(e);
    }
  }

}
