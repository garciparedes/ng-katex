import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { KatexModule } from 'ng-katex';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
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
