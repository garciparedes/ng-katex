import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'ng-katex demo app';
  equation: string = "\\sum_\{i=1\}^nx_i";
  options: any = {
    displayMode: true,
    macros: {
      "\\RR": "\\mathbb{R}"
    }
  };
}
