# ng-KaTeX

Angular module to write beautiful math expressions with TeX syntax boosted by [KaTeX](https://github.com/Khan/KaTeX) library

## Description

[TODO]

## Install

To install the module you can simply type it on your command line:
```
npm install ng-katex --save
```

## Usage

To add the module to your proyect add the `KatexModule` to `import`'s field of your parent module:
```js
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

import { KatexModule } from 'ng-katex';

@NgModule({
  imports: [BrowserModule, KatexModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})

class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
```

And then you can use it as component:

```js
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<ng-katex [expression]="equation">`
})
export class AppComponent {
  equation: string = ''\sum_{i=1}^nx_i'';
}
```

Or as directive:

```js
@Component({
  selector: 'my-app',
  template: `<h1 [katex]="equation"></h1>`
})
export class AppComponent {
  equation: string = ''\sum_{i=1}^nx_i'';
}
```

## Contributors

- Sergio García Prado [@garciparedes](https://garciparedes.me)

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md)

## License

ng-katex is licensed under the [MIT](LICENSE).
