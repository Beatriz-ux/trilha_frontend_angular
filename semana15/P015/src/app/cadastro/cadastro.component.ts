import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent implements OnInit{
  formsCadastro : FormGroup;
  constructor() { 
    this.formsCadastro = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.maxLength(12), Validators.pattern(/^\S*$/)]),
      email: new FormControl(null, [Validators.required, Validators.maxLength(6), Validators.email]),
      passWord: new FormControl(null, [Validators.required, Validators.maxLength(4)]),
      confirmPassword: new FormControl(null),
      nameFarm: new FormControl(null, [Validators.required, Validators.maxLength(5)]),
  });
  }

  ngOnInit(): void {
  }

  cadastrar(){
    console.log('Cadastrando...');
    console.log(this.formsCadastro);
  }


}
