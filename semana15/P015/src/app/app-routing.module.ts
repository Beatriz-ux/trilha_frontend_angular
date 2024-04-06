import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login-module/login/login.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './guards/authorization.guard';
import { MinhaProducaoComponent } from './minha-producao/minha-producao.component';
import { SessaoComponent } from './sessao/sessao.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'login', 
      // component: LoginComponent 
      loadChildren: () => import('./login-module/login-module.module').then(m => m.LoginModuleModule)

    },
      { path: '', component: CadastroComponent },
    ],
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'dashboard/manejo',
    component: SessaoComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'teste',
    component: MinhaProducaoComponent,
    canActivate: [AuthGuard],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
