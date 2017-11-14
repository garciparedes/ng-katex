import { Component } from '@angular/core';
import { KatexOptions } from 'ng-katex';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'ng-katex';
  url: string = 'https://github.com/garciparedes/ng-katex';
  equation: string = 'c = \\pm\\sqrt{a^2 + b^2}';
  options: KatexOptions = {
    displayMode: true,
  };
}
