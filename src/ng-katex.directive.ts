import { Directive, ElementRef, Input,Output, EventEmitter } from '@angular/core';
import { KatexService } from './ng-katex.service';

@Directive({
  selector: '[katex]'
})
export class KatexDirective {

  @Input('katex') equation: string;
  @Input('katex-options') options: any;

  @Output() onError = new EventEmitter<any>();

  constructor(private el: ElementRef,
              private katexService: KatexService) { }

  ngOnChanges() {
    try{
      this.katexService.renderExpression(this.equation, this.el, this.options);
    } catch (e) {
      this.onError.emit(e);
    }
  }

}
