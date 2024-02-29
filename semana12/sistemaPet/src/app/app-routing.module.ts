import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaAtendimentoComponent } from './lista-atendimento/lista-atendimento.component';
import { FormsAtendimentoComponent } from './forms-atendimento/forms-atendimento.component';

const routes: Routes = [
  { path: 'forms', component: FormsAtendimentoComponent },
  { path: 'lista-atendimento', component: ListaAtendimentoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
