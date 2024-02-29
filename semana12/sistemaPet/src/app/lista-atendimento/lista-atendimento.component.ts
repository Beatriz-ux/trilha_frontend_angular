import { Component, OnInit } from '@angular/core';
import { Atendimento, ServiceBDService } from '../service/service-bd.service';

@Component({
  selector: 'app-lista-atendimento',
  templateUrl: './lista-atendimento.component.html',
  styleUrl: './lista-atendimento.component.css'
})
export class ListaAtendimentoComponent implements OnInit{
  public dados: Atendimento[] = [];
  
  constructor(private serviceBD: ServiceBDService) {

  }
  ngOnInit() {
    this.dados = this.serviceBD.exibirDados();
    console.log(this.dados);
  }

  mostrarDados() {
    return this.dados;
  }

}
