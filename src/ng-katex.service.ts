import { ElementRef, Injectable } from '@angular/core';
import * as katex from 'katex';

@Injectable()
export class KatexService {

  render(equation: string, element: ElementRef, options?: any) {
    return katex.render(equation, element.nativeElement, options);
  }
}
