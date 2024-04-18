import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardControleComponent } from './dashboard-controle/dashboard-controle.component';
import { TabelaHistoricoComponent } from './tabela-historico/tabela-historico.component';
import { RouterModule } from '@angular/router';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { CompartilhadoModule } from '../compartilhado/compartilhado.module';
import { NgApexchartsModule } from 'ng-apexcharts';



@NgModule({
  declarations: [
    DashboardControleComponent,
    TabelaHistoricoComponent
  ],
  imports: [
    CommonModule,
    CompartilhadoModule,
    NgApexchartsModule,
    NgMultiSelectDropDownModule.forRoot(),
    RouterModule.forChild([
      { path: '', component: DashboardControleComponent }
    ])
  ],
})
export class ControleModuleModule { }
