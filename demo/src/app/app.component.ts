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
  paragraph: string ='Lorem ipsum dolor sit amet, consectetur adipiscing elit. \
  Sed molestie placerat metus sed maximus. Sed vitae interdum dui. Fusce \
  pellentesque quam vel hendrerit tincidunt. $\\sum_{i=1}^nx_i\\$$ This is a \
  proof $\\sum_{i=1}^nx_i$ and abcd $\\sum_{i=1}^nx_i$ $$\\sum_{i=1}^nx_i\\$$$ \
  and $\\sum_{i=1}^nx_i$ Suspendisse sollicitudin eu leo sit amet pulvinar. \
  Nullam sed mauris sed sem tempor scelerisque. Nunc nec dui est. Duis congue \
  sed leo quis fringilla. Vestibulum vel arcu at arcu aliquam dignissim. \
  Aliquam pharetra tempor est, eget tempus orci cursus consectetur. Suspendisse \
  faucibus pellentesque sem, ut tincidunt risus imperdiet nec. Etiam mollis \
  sagittis viverra.';
}
