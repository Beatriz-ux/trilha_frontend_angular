import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  modoLogin = true;
  estaCarregando = false;
  erro: string = '';
  temErro: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  onTrocarModo() {
    this.modoLogin = !this.modoLogin;
  }

  onSubmit(formulario: NgForm) {
    if (!formulario.valid) {
      return;
    }

    const email = formulario.value.email;
    const password = formulario.value.password;

    this.estaCarregando = true;

    if (this.modoLogin) {
      this.authService.login(email, password).subscribe((responseData) => {
        console.log(responseData);
        this.estaCarregando = false;
        this.temErro = false;
        this.router.navigate(['/criar-atendimento']);
      });
    } else {
      this.authService.signUp(email, password).subscribe(
        (responseData) => {
          console.log(responseData);
          this.estaCarregando = false;
          this.temErro = false;
          this.router.navigate(['/home']);
        },
        (error) => {
          console.log(error);
          switch (error.error.error.message) {
            case 'email_EXISTS':
              this.erro = 'O e-mail já está em uso.';
              break;
            default:
              this.erro = 'Ocorreu um erro ao cadastrar o usuário.';
              break;
          }
          this.temErro = true;
          this.erro = 'Ocorreu um erro ao cadastrar o usuário.';
          this.estaCarregando = false;
        }
      );
    }

    formulario.reset();
  }
}
