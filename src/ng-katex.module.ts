import { NgModule } from '@angular/core';
import { KatexService } from './ng-katex.service';
import { KatexDirective } from './ng-katex.directive';
import { KatexComponent } from './ng-katex.component';
import { KatexParagraphComponent } from './ng-katex-paragraph.component';

@NgModule({
  imports: [],
  providers: [
    KatexService,
  ],
  declarations: [
    KatexDirective,
    KatexComponent,
    KatexParagraphComponent,
  ],
  exports: [
    KatexComponent,
    KatexParagraphComponent,
  ],
})
export class KatexModule {}
