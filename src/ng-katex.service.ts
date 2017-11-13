import { Injectable, ElementRef } from '@angular/core';

import * as katex from 'katex';

@Injectable()
export class KatexService {

  render(equation: string, element: ElementRef, options?: any) {
    return katex.render(equation, element.nativeElement, options);
  }

  renderToString(equation: string, options?: any): string {
    return katex.renderToString(equation, options);
  }
}
