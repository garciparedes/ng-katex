import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as ko from './ng-katex.options';

@Component({
  selector: 'ng-katex-paragraph',
  template: `
  <p>
  <span *ngFor='let part of splitParagraph(paragraph)'
  [ngSwitch]='classify(part)'>

  <ng-katex *ngSwitchCase='DISPLAY_MODE'
  [equation]='extractEquation(part)' [options]='options'></ng-katex>

  <ng-katex *ngSwitchCase='INLINE_MODE'
  [equation]='extractEquation(part)'></ng-katex>

  <span *ngSwitchDefault>{{ extractParagraph(part) }}</span>

  </span>
  </p>
  `
})
export class KatexParagraphComponent {

  private readonly TEXT_MODE: number = 0;
  private readonly DISPLAY_MODE: number = 1;
  private readonly INLINE_MODE: number = 2;

  private readonly boundary: RegExp =  /(?<!\\)\$/;
  private readonly expression: RegExp = /(?:\\\$|[^\$])+/;

  private readonly display: RegExp =  new RegExp(
    '(' +
    this.boundary.source + this.boundary.source +
    this.expression.source +
    this.boundary.source + this.boundary.source +
    ')'
  );

  private readonly inline: RegExp =  new RegExp(
    '(' +
    this.boundary.source  +
    this.expression.source +
    this.boundary.source +
    ')'
  );

  private readonly splitRe = new RegExp(
    this.display.source + '|' + this.inline.source
  );

  private readonly matchDisplayRe = new RegExp(
    '^' + this.display.source + '$'
  );

  private readonly matchInlineRe = new RegExp(
    '^' + this.inline.source + '$'
  );

  private readonly cleanRe = new RegExp(
    '(\\${1,2})(' + this.expression.source +  ')\\1'
  );

  private readonly options: ko.KatexOptions = {
    displayMode: true
  };

  @Input() paragraph: string;
  @Output() onError = new EventEmitter<any>();

  hasError(error) {
    this.onError.emit(error);
  }

  splitParagraph(paragraph: string): Array<string> {
    let splitted = paragraph.split(this.splitRe).filter(x => x);
    return splitted;
  }

  private classify(text: string): number {
    if (text.match(this.matchInlineRe)) {
      return this.INLINE_MODE;
    } else if (text.match(this.matchDisplayRe)) {
      return this.DISPLAY_MODE;
    } else {
      return this.TEXT_MODE;
    }
  }

  private extractEquation(text: string): string {
    let exp: string = text.match(this.cleanRe)[2];
    return exp;
  }

  private extractParagraph(text: string): string {
    return text.replace(/\\\$/g, '$');
  }
}
