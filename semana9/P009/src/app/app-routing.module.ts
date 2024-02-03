import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Projeto1Component } from './projeto1/projeto1.component';

const routes: Routes = [
  {path: 'projeto1' , component: Projeto1Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
