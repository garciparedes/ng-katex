import { Component, Input } from '@angular/core';
import { extractMath, Segment } from 'extract-math';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { KatexService } from './ng-katex.service';


@Component({
  selector: 'ng-katex-html',
  template: `<span [innerHTML]="allHtml"></span>`
})
export class KatexHtmlComponent {
  constructor(private domSanitizer: DomSanitizer, private katexService: KatexService) { }

  allHtml: SafeHtml;

  _html: string;

  private _segments: Segment[] = [];

  @Input() set html(html: string) {

    if (html !== this._html) {
      this._html = html;
      this.updateAllHtml();
    }
  }

  private updateAllHtml() {

    if (!this._html) {
      this.allHtml = '';
      this._segments = [];
      return;
    }

    this._segments = extractMath(this._html);

    const allHtml = this._segments.map((seg) => {
      if (seg.math) {
        return this.katexService.renderToString(seg.raw, { displayMode: seg.type === 'display' });
      }
      else {
        return seg.value;
      }
    }).reduce((total, current) => {
      return total += current;
    });
    this.allHtml = this.domSanitizer.bypassSecurityTrustHtml(allHtml);
  }

  get segments(): Segment[] {
    return this._segments;
  }
}
