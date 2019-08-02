import { ElementRef, Injectable } from '@angular/core';
import * as ko from './ng-katex.options';

import * as katex from 'katex';

@Injectable()
export class KatexService {

  render(equation: string, element: ElementRef, options?: ko.KatexOptions) {
    return katex.render(equation, element.nativeElement, options);
  }

  renderToString(equation: string, options?: ko.KatexOptions): string {
    return katex.renderToString(equation, options);
  }
}
