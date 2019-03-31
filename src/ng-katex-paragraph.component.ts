import { Component, Input } from '@angular/core';
import { extractMath, Segment } from 'extract-math';

@Component({
  selector: 'ng-katex-paragraph',
  template: `
    <p>
      <ng-container *ngFor="let segment of segments">
        <ng-katex
          *ngIf="segment.math else text"
          [equation]="segment.value"
          [options]="{ displayMode: segment.type === 'display' }">
        </ng-katex>
        <ng-template #text>{{ segment.value }}</ng-template>
      </ng-container>
    </p>
  `
})
export class KatexParagraphComponent {
  @Input() paragraph: string;

  get segments (): Segment[] {
    return extractMath(this.paragraph);
  }
}
