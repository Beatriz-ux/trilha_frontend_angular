import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Projeto1Component } from './projeto1/projeto1.component';
import { Projeto2Component } from './projeto2/projeto2.component';
import { Projeto3Component } from './projeto3/projeto3.component';

@NgModule({
  declarations: [
    AppComponent,
    Projeto1Component,
    Projeto2Component,
    Projeto3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  
 }
