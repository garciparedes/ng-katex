import { Directive, ElementRef, Input } from '@angular/core';
import { KatexService } from './ng-katex.service';

@Directive({
  selector: '[katex]'
})
export class KatexDirective {

  @Input('katex') expression: string;

  constructor(el: ElementRef,
              katexService: KatexService) { }

  ngOnChanges() {
    this.katexService.renderExpression(this.expression, this.el);
  }

}
