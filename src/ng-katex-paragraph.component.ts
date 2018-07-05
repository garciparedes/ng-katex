import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as ko from './ng-katex.options';

@Component({
  selector: 'ng-katex-paragraph',
  template: `
    <p>
      <span *ngFor="let part of splitParagraph(paragraph)"
            [ngSwitch]="classify(part)">

        <ng-katex *ngSwitchCase="DISPLAY_MODE"
                  [equation]="extractEquation(part)" [options]="options"></ng-katex>

        <ng-katex *ngSwitchCase="INLINE_MODE"
                  [equation]="extractEquation(part)"></ng-katex>

        <span *ngSwitchDefault>{{ extractParagraph(part) }}</span>

      </span>
    </p>
  `
})
export class KatexParagraphComponent {

  private readonly DISPLAY_MODE: number = 1;
  private readonly INLINE_MODE: number = 2;


  private readonly splitRe = /(\$(?:\\\$|[^\$])+\$)|(\$\$(?:\\\$|[^\$])+\$\$)/g;

  private readonly matchDisplayRe = /(?:\$\$((?:\\\$|[^\$])+)\$\$)/;
  private readonly matchInlineRe = /(?:\$((?:\\\$|[^\$])+)\$)/;

  private readonly cleanRe = /(\${1,2})((?:\\\$|[^\$])+)\1/


  private readonly options: ko.KatexOptions = {
    displayMode: true
  };

  @Input() paragraph: string;
  @Output() onError = new EventEmitter<any>();

  hasError(error) {
    this.onError.emit(error);
  }

  splitParagraph(paragraph: string): Array<string> {
    return paragraph.split(this.splitRe).filter(x => x)
  }

  private classify(s: string): number {
    if (s.match(this.matchDisplayRe)) {
      return 1;
    } else if (s.match(this.matchInlineRe)) {
      return 2;
    } else {
      return 0;
    }
  }

  private extractEquation(s: string): string {
    return s.match(this.cleanRe)[2];
  }

  private extractParagraph(s: string): string {
    return s;
  }
}
