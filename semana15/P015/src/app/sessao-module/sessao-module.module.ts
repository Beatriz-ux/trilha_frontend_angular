import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessaoComponent } from './sessao/sessao.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CompartilhadoModule } from '../compartilhado/compartilhado.module';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../guards/authorization.guard';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';



@NgModule({
  declarations: [
    SessaoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    CompartilhadoModule,
    NgMultiSelectDropDownModule.forRoot(),
    RouterModule.forChild([
      { path: '', component: SessaoComponent }
    ])
  ],
  providers: [
    AuthGuard
  ],
  exports: [
    SessaoComponent
  ]
})
export class SessaoModuleModule { }
