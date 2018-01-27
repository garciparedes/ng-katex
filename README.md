# ng-KaTeX

[![npm](https://img.shields.io/npm/v/ng-katex.svg)](https://www.npmjs.com/package/ng-katex)
[![Travis](https://img.shields.io/travis/garciparedes/ng-katex.svg)](https://travis-ci.org/garciparedes/ng-katex)
[![npm](https://img.shields.io/npm/l/ng-katex.svg)](LICENSE)

## Description
Angular module to write beautiful math expressions with TeX syntax boosted by [KaTeX](https://github.com/Khan/KaTeX) library.
You can see a demo [here](https://garciparedes.github.io/ng-katex).

## Install

To install the module you can simply type it on your command line:
```
npm install ng-katex --save
```

To add the module to your proyect add the `KatexModule` to `import`'s field of your parent module:
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
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.8.3/katex.min.css">
```

## Usage

You can use it as follows:

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

You can add options to `ng-katex` components with:

```js
import { Component } from '@angular/core';

import { KatexOptions } from 'ng-katex';

@Component({
  selector: 'my-app',
  template: `<ng-katex [equation]="equation" [options]=options></ng-katex>`
})
export class AppComponent {
  equation: string = '\\sum_{i=1}^nx_i';
  options: KatexOptions = {
    displayMode: true,
  };
}
```

The `options` object structure is defined [here](https://github.com/Khan/KaTeX#rendering-options).

## Contributors

- Sergio García Prado [@garciparedes](https://garciparedes.me)

## Changelog
See [changelog](https://github.com/garciparedes/ng-katex/releases) page to get info about release changes.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md)

## License

ng-katex is licensed under the [MIT](LICENSE).
