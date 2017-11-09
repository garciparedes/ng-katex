import { Injectable } from '@angular/core';
import * as katex from 'katex/katex.js';

@Injectable()
export class KatexService {

  getExpression(e: string, element) {
    return katex.render(e, element);
  }
}
