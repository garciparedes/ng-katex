# ng-KaTeX

[![npm](https://img.shields.io/npm/v/ng-katex.svg)](https://www.npmjs.com/package/ng-katex)
[![Travis](https://img.shields.io/travis/garciparedes/ng-katex/master.svg)](https://travis-ci.org/garciparedes/ng-katex)
[![npm](https://img.shields.io/npm/dy/ng-katex.svg)](https://www.npmjs.com/package/ng-katex)
[![GitHub stars](https://img.shields.io/github/stars/garciparedes/ng-katex.svg)](https://github.com/garciparedes/ng-katex)
[![npm](https://img.shields.io/npm/l/ng-katex.svg)](https://github.com/garciparedes/ng-katex/blob/master/README.md)


## Description
Angular module to write beautiful math expressions in TeX syntax boosted by [KaTeX](https://github.com/Khan/KaTeX) library.
You can see a demo [here](https://garciparedes.github.io/ng-katex).

## Install

To install the module you can simply type it on your command line:
```
npm install ng-katex --save
```

To add the module to your project add the `KatexModule` to `import`'s field of your parent module:
```js
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { KatexModule } from 'ng-katex';

import { AppComponent } from './app/app.component';

@NgModule({
  imports: [
    BrowserModule,
    KatexModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})

class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
```

#### Important!
**If you're using [`angular-cli`](https://github.com/angular/angular-cli), add the katex css import to your `styles.css`:**
```css
@import '~katex/dist/katex.css';
```

**If you're not using the `angular-cli`, import the stylesheet to your `index.html`:**

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.11.0/katex.min.css">
```

## Usage

You can write a LaTeX equation as follows:

```js
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<ng-katex [equation]="equation"></ng-katex>`
})
export class AppComponent {
  equation: string = '\\sum_{i=1}^nx_i';
}
```

Also, you can add options to `ng-katex` components with:

```js
import { Component } from '@angular/core';

import { KatexOptions } from 'ng-katex';

@Component({
  selector: 'my-app',
  template: `<ng-katex [equation]="equation" [options]="options"></ng-katex>`
})
export class AppComponent {
  equation: string = '\\sum_{i=1}^nx_i';
  options: KatexOptions = {
    displayMode: true,
  };
}
```

The `options` object structure is defined [here](https://github.com/Khan/KaTeX#rendering-options).

If you want to write a paragraph with LaTeX equations, you can do it as follows:

```js
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<ng-katex-paragraph [paragraph]="paragraph"></ng-katex-paragraph>`
})
export class AppComponent {
  paragraph: string = `
    You can write text, that contains expressions like this: $x ^ 2 + 5$ inside them. As you probably know.
    You also can write expressions in display mode as follows: $$\\sum_{i=1}^n(x_i^2 - \\overline{x}^2)$$.
    In first case you will need to use \\$expression\\$ and in the second one \\$\\$expression\\$\\$.
    To scape the \\$ symbol it's mandatory to write as follows: \\\\$
  `;
}
```

If you want to write HTML with LaTeX equations, you can do it as follows: (Security Note: this bypasses Angular DOM Sanitization)

```js
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<ng-katex-html [html]="html"></ng-katex-html>`
})
export class AppComponent {
  html: string = `
    <div>You can write html, that contains expressions like this: $x ^ 2 + 5$ inside them. As you probably know. You also can write expressions in display mode as follows: $$\\sum_{i=1}^n(x_i^2 - \\overline{x}^2)$$. In first case you will need to use \\$expression\\$ and in the second one \\$\\$expression\\$\\$. To scape the \\$ symbol it's mandatory to write as follows: \\\\$</div><p>: <button>I'm a button</button></p>
  `;
}
```

## Contributors

- Sergio García Prado [@garciparedes](https://garciparedes.me)
- Joshua Claxton [@joshclax](https://www.joshclax.com/)

## Changelog
See [changelog](https://github.com/garciparedes/ng-katex/releases) page to get info about release changes.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md)

## License

ng-katex is licensed under [MIT](LICENSE) license.
