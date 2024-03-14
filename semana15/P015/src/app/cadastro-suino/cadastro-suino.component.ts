import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-suino',
  templateUrl: './cadastro-suino.component.html',
  styleUrls: ['./cadastro-suino.component.css'],
})
export class CadastroSuinoComponent implements OnInit {
  cadastroForm = new FormGroup({
    brincoAnimal: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]*$'),
    ]),
    brincoPai: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]*$'),
    ]),
    brincoMae: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]*$'),
    ]),
    dataNascimento: new FormControl('', Validators.required),
    dataSaida: new FormControl('', Validators.required),
    status: new FormControl('', Validators.required),
    sexo: new FormControl('', Validators.required),
  });

  constructor() {}

  ngOnInit(): void {}

  onSubmit(): void {
    console.log(this.cadastroForm.value);
    //service
    /* Aqui precisa ta o codigo para salvar isso no banco, já linkando ao user */
  }
}
