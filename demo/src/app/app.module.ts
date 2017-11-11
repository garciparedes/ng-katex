import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { KatexModule } from 'ng-katex';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({

  imports: [
    BrowserModule,
    KatexModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
