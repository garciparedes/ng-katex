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
  paragraph: string = "You can write text, that contains expressions like this: $x ^ 2 + 5$ inside them. As you probably know. You also can write expressions in display mode as follows: $$\\sum_{i=1}^n(x_i^2 - \\overline{x}^2)$$. In first case you will need to use \\$expression\\$ and in the second one \\$\\$expression\\$\\$. To scape the \\$ symbol it's mandatory to write as follows: \\\\$";
}
