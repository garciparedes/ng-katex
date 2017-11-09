import { Directive, ElementRef } from '@angular/core';
import { KatexService } from './ng-katex.service';

@Directive({
  selector: '[Katex]'
})
export class KatexDirective {

  private expression: string;

  constructor(private katexService: KatexService,
              private el: ElementRef) { }

  ngOnChanges() {
      this.katexService.getExpression(this.expression,this.el.nativeElement)
    }
}
