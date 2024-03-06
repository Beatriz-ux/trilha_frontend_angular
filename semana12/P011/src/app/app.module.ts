import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormUsuarioComponent } from './form-usuario/form-usuario.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StatusComponent } from './status/status.component';

@NgModule({
  declarations: [
    AppComponent,
    FormUsuarioComponent,
    StatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
