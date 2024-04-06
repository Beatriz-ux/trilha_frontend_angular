import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './guards/authorization.guard';
import { SessaoComponent } from './sessao-module/sessao/sessao.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'login',
        // component: LoginComponent
        loadChildren: () =>
          import('./login-module/login-module.module').then(
            (m) => m.LoginModuleModule
          ),
      },
      { path: '', component: CadastroComponent },
    ],
  },
  {
    path: 'dashboard',
    // component: DashboardComponent,
    loadChildren: () =>
      import('./dashboard-module/dashboard-module.module').then(
        (m) => m.DashboardModuleModule
      ),
    // canActivate: [AuthGuard],
  },
  {
    path: 'dashboard/manejo',
    loadChildren: () =>
      import('./sessao-module/sessao-module.module').then(
        (m) => m.SessaoModuleModule
      ),
    // component: SessaoComponent,
    // canActivate: [AuthGuard],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
