import { Injectable, ElementRef } from '@angular/core';

import * as katex from 'katex/katex.js';

@Injectable()
export class KatexService {

  renderExpression(e: string, element: ElementRef) {
    return katex.render(e, element.nativeElement);
  }

}
