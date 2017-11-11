import { Directive, ElementRef, Input } from '@angular/core';
import { KatexService } from './ng-katex.service';

@Directive({
  selector: '[katex]'
})
export class KatexDirective {
  @Input('katex') expression: string;

  constructor(private katexService: KatexService,
              private el: ElementRef) { }

  ngOnChanges() {
      this.katexService.getExpression(this.expression,this.el.nativeElement)
    }
}
