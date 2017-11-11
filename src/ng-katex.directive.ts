import { Directive, ElementRef, Input } from '@angular/core';
import { KatexService } from './ng-katex.service';

@Directive({
  selector: '[katex]'
})
export class KatexDirective {

  @Input('katex') equation: string;
  @Input('katex-options') options: any;

  constructor(private el: ElementRef,
              private katexService: KatexService) { }

  ngOnChanges() {
    this.katexService.renderExpression(this.equation, this.el, this.options);
  }

}
