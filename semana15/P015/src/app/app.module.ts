import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { CadastroSuinoComponent } from './dashboard-module/cadastro-suino/cadastro-suino.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard-module/dashboard/dashboard.component';
import { AutenticaInterceptor } from './service/autentica.interceptor';
// import { GraficoComponent } from './dashboard-module/grafico/grafico.component';
import { MatIconModule } from '@angular/material/icon';
import { HistoricoPesoComponent } from './dashboard-module/historico-peso/historico-peso.component';
import { MinhaProducaoComponent } from './dashboard-module/minha-producao/minha-producao.component';
// import { HeaderComponent } from './compartilhado/header/header.component';
// import { FooterComponent } from './compartilhado/footer/footer.component';
// import { SessaoComponent } from './sessao-module/sessao/sessao.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { LoginModuleModule } from './login-module/login-module.module';
import { ControleModuleModule } from './controle-module/controle-module.module';
@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    HomeComponent,
    // CadastroSuinoComponent,
    // DashboardComponent,
    // GraficoComponent,
    // HistoricoPesoComponent,
    // HeaderComponent,
    // FooterComponent,
    // SessaoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatIconModule,
    NgMultiSelectDropDownModule.forRoot(),
    LoginModuleModule,
    ControleModuleModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AutenticaInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
