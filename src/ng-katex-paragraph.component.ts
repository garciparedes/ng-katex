import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as ko from './ng-katex.options';

@Component({
  selector: 'ng-katex-paragraph',
  template: `
    <p><span *ngFor="let part of splitParagraph(paragraph)" [ngSwitch]="classify(part)">
      <ng-katex *ngSwitchCase="1"  [equation]="clean(part)" [options]="{displayMode: true}"></ng-katex>
      <ng-katex *ngSwitchCase="2" [equation]="clean(part)"></ng-katex>
      <span *ngSwitchDefault>{{ part }}</span>
    </span></p>
  `
})
export class KatexParagraphComponent {

  private static readonly DISPLAY_MODE: number = 1;
  private static readonly INLINE_MODE: number = 2;
  private static readonly splitRegex = /(\$(?:\\.|[^\$])+\$)|(\$\$(?:\\.|[^\$])+\$\$)/g


  @Input() paragraph: string;
  @Output() onError = new EventEmitter<any>();

  hasError(error) {
    this.onError.emit(error);
  }

  splitParagraph(paragraph: string): Array<string> {
    return paragraph.split(KatexParagraphComponent.splitRegex).filter(x => x)
  }

  private classify(s: string): number {
    if (s.match(/(?:\$\$((?:\\.|[^\$])+)\$\$)/)) {
      return 1;
    } else if (s.match(/(?:\$((?:\\.|[^\$])+)\$)/)) {
      return 2;
    } else {
      return 0;
    }
  }

  private clean(s: string): string {
    return s.match(/(\${1,2})((?:\\.|[^\$])+)\1/)[2];
  }
}
