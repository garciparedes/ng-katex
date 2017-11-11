import { Directive, ElementRef, Input } from '@angular/core';
import { KatexService } from './ng-katex.service';

@Directive({
  selector: '[katex]'
})
export class KatexDirective {

  @Input('katex') expression: string;

  constructor(private el: ElementRef,
              private katexService: KatexService) { }

  ngOnChanges() {
    this.katexService.getExpression(this.expression, this.el.nativeElement);
  }
  
}
