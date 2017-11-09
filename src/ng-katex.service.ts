import { Injectable } from '@angular/core';
import * as katex from 'katex';

@Injectable()
export class KatexService {

  getExpression(e: string, element) {
    return katex.render(e, element);
  }
}
