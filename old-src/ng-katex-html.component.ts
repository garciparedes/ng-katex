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
  @Input() html: string;

  get allHtml(): SafeHtml {
    let segments = this.segments;
    var allHtml = segments.map((seg) => {
      if (seg.math) {
        return this.katexService.renderToString(seg.raw, { displayMode: seg.type === 'display' });
      }
      else {
        return seg.value;
      }
    }).reduce((total, current) => {
      return total += current;
    });
    return this.domSanitizer.bypassSecurityTrustHtml(allHtml);
  }

  get segments(): Segment[] {
    return extractMath(this.html);
  }
}