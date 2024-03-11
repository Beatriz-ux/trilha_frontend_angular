import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  formsCadastro: FormGroup;
  bufferPassWord: string = '';
  constructor() {
    this.formsCadastro = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
        Validators.email,
      ]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    });
  }
login() {
    console.log('Logando...');
    console.log(this.formsCadastro);
  }
}
