import { NgModule } from '@angular/core';
import { KatexService } from './ng-katex.service';
import { KatexDirective } from './ng-katex.directive';
import { KatexComponent } from './ng-katex.component';

@NgModule({
  imports: [],
  providers: [
    KatexService,
  ],
  declarations: [
    KatexDirective,
    KatexComponent,
  ],
  exports: [
    KatexComponent,
  ],
})
export class KatexModule { }
