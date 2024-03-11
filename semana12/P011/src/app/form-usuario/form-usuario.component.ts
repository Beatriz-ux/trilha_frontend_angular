import { Component, OnInit } from '@angular/core';
import { AbstractControl, Form, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { FormServiceService } from '../service/form-service.service';
import * as CryptoJS from 'crypto-js';



@Component({
  selector: 'app-form-usuario',
  templateUrl: './form-usuario.component.html',
  styleUrl: './form-usuario.component.css'
})
export class FormUsuarioComponent implements OnInit{
  form : FormGroup;
  dados: any [] = [];
  openAlert : boolean = false;
  constructor(private service : FormServiceService) {
    this.form = new FormGroup({
      name: new FormControl(null,
        [Validators.required,this.userNameValidator.bind(this), Validators.maxLength(12),Validators.pattern(/^\S*$/)],),
      passWord: new FormControl(null,
        [Validators.required, 
        Validators.minLength(4),
        Validators.pattern(/^(?=.*[A-Z])(?=.*[!@#$%^&*])/)]),
      email: new FormControl(null,
        [Validators.required, Validators.email]),
      fullName: new FormControl(null,
        [Validators.required, Validators.pattern(/^[^\s]+(\s+[^\s]+)*$/)]),
      telephone: new FormControl(null,
        [Validators.required, Validators.pattern(/^\([1-9]{2}\)\s[1-9][0-9]{3,4}-[0-9]{4}$/)]),
      address: new FormControl(null,
        [Validators.required]),
      date : new FormControl(null,
        [Validators.required, this.ageValidator.bind(this)]),
      gender : new FormControl(null,
        [Validators.required, Validators.pattern(/^(m|f)$/)]),
      profession : new FormControl('ti',
        [Validators.required]),

    });

   }

  ngOnInit(): void {
    
  }

  onSubmit() {
    if (this.form.valid) {
      var senhaCriptografada = CryptoJS.SHA256(this.form.value.passWord).toString();
      this.dados.push(this.form.value);
      this.form.reset();
    }else{
      this.openAlert = true;

    }

  }
  ageValidator(control : AbstractControl): ValidationErrors | null{
    // Verifica se o usuário tem pelo menos 18 anos
    const birthday = new Date(control.value);
    const age = new Date().getFullYear() - birthday.getFullYear();
    return age >= 18 ? null : { underage: true };
  }

  userNameValidator(control : AbstractControl): ValidationErrors | null{
    const name = control.value;
    return this.dados.find((dado) => dado.name === name) ? {nameExists: true} : null;
  }

  onFocus(){
    this.service.onNameFocus();
  }

  onChanges(event : any){
    this.service.onNameChange(event);
  }

  onInput(event : any){
    this.service.onNameInput(event);
  }

  onBlur(){
    this.service.onNameBlur();
  }

  onForm(){
    console.log("tocou");
    this.service.onFormChange(this.form);
  }

}
