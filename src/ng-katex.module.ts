import { NgModule, } from '@angular/core';
import { NgKatexDirective } from './ng-katex.directive';
import { NgKatexService } from './ng-katex.service';
import { NgKatexComponent } from './ng-katex.component';

@NgModule({
    imports: [],
    exports: [
      NgKatexDirective,
      NgKatexComponent
    ],
    declarations: [
      NgKatexDirective,
      NgKatexComponent
    ],
    providers: [
      NgKatexService
    ],
})
export class NgKatexModule { }
