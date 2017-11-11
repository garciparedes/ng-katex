import { Injectable, ElementRef } from '@angular/core';

import * as katex from 'katex';

@Injectable()
export class KatexService {

  renderExpression(equation: string, element: ElementRef, options?: any) {
    return katex.render(equation, element.nativeElement, options);
  }

}
