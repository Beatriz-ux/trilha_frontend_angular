import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css',
})
export class CadastroComponent implements OnInit {
  formsCadastro: FormGroup;
  bufferPassWord: string = '';
  constructor() {
    this.formsCadastro = new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^\p{L}+(\s+\p{L}+)+$/u),
      ]),
      email: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
        Validators.email,
      ]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl(null, [Validators.required]),
      nameFarm: new FormControl(null, [
        Validators.required,
        Validators.minLength(5),
      ]),
    });
  }

  ngOnInit(): void {}

  cadastrar() {
    console.log('Cadastrando...');
    console.log(this.formsCadastro);
  }
  comparePassword(pass: any): void {
    console.log(pass.target.value);
    console.log(this.bufferPassWord);
    const confirmPasswordControl =
      this.formsCadastro.controls['confirmPassword'];

    if (pass.target.value === this.bufferPassWord) {
      console.log('Senhas iguais');
      confirmPasswordControl.setErrors(null);
    } else {
      confirmPasswordControl.setErrors({ notSame: true });
    }
  }
  bufferPass(pass: any) {
    this.bufferPassWord = pass.target.value;
  }
}
