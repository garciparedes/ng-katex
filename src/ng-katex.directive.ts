import {
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { KatexService } from './ng-katex.service';

@Directive({
  selector: '[katex]',
})
export class KatexDirective {

  @Input('katex') equation: string;
  @Input('katex-options') options: any;

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
