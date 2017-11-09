import { NgModule, } from '@angular/core';
import { KatexDirective } from './ng-katex.directive';
import { KatexService } from './ng-katex.service';
import { KatexComponent } from './ng-katex.component';

@NgModule({
    imports: [],
    exports: [
      KatexDirective,
      KatexComponent
    ],
    declarations: [
      KatexDirective,
      KatexComponent
    ],
    providers: [
      KatexService
    ],
})
export class KatexModule { }
