import { ElementRef, Injectable } from '@angular/core';
import { render, renderToString, KatexOptions } from 'katex';

@Injectable()
export class KatexService {

  render(equation: string, element: ElementRef, options?: KatexOptions) {
    return render(equation, element.nativeElement, options);
  }

  renderToString(equation: string, options?: KatexOptions): string {
    return renderToString(equation, options);
  }
}
