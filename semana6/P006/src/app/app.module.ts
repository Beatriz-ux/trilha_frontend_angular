import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { DestaqueComponent } from './destaque/destaque.component';
import { MoedasComponent } from './moedas/moedas.component';
import { ResultadoComponent } from './resultado/resultado.component';
import { FooterComponent } from './footer/footer.component';
import { TituloComponent } from './titulo/titulo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    NoticiasComponent,
    DestaqueComponent,
    MoedasComponent,
    ResultadoComponent,
    FooterComponent,
    TituloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
