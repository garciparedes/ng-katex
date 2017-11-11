import { Injectable, ElementRef } from '@angular/core';

import * as katex from 'katex';

@Injectable()
export class KatexService {

  renderExpression(equation: string, element: ElementRef, options?: any) {
    try {
      katex.render(equation, element.nativeElement, options);
    } catch (e){
        console.log(e);
    }
  }
}
