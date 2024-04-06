// dashboard-module.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CadastroSuinoComponent } from './cadastro-suino/cadastro-suino.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HistoricoPesoComponent } from './historico-peso/historico-peso.component';
import { MinhaProducaoComponent } from './minha-producao/minha-producao.component';
import { AuthGuard } from '../guards/authorization.guard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CompartilhadoModule } from '../compartilhado/compartilhado.module';
import { GraficoComponent } from './grafico/grafico.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent // Rota vazia que carrega o DashboardComponent
  },
];

@NgModule({
  declarations: [
    CadastroSuinoComponent,
    DashboardComponent,
    HistoricoPesoComponent,
    MinhaProducaoComponent,
    GraficoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    CompartilhadoModule
  ],
  providers: [
    AuthGuard
  ]
})
export class DashboardModuleModule { }
