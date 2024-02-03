import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Projeto1Component } from './projeto1/projeto1.component';
import { Projeto2Component } from './projeto2/projeto2.component';
import { Projeto3Component } from './projeto3/projeto3.component';

const routes: Routes = [
  {path: 'projeto1' , component: Projeto1Component},
  {path: 'projeto2' , component: Projeto2Component},
  {path: 'projeto3' , component: Projeto3Component},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
