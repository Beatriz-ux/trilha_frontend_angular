import { Component } from '@angular/core';
import { ServiceBDService } from '../service/service-bd.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-forms-atendimento',
  templateUrl: './forms-atendimento.component.html',
  styleUrl: './forms-atendimento.component.css'
})
export class FormsAtendimentoComponent {
  cadastrarPet :FormGroup ;

  constructor(private serviceBD: ServiceBDService) {
    this.cadastrarPet = new FormGroup({
        data: new FormControl(''),
        nome: new FormControl(''),
        raca: new FormControl(''),
        tutor: new FormControl(''),
        tipo: new FormControl(''),
        observacao: new FormControl(''),
   });
  }

   
   onSubmit() {
      this.serviceBD.adicionarDados(this.cadastrarPet.value);
      console.log("Service"+this.serviceBD.exibirDados());
  }
}
