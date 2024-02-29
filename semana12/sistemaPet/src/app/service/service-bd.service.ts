import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ServiceBDService {

  private ListaAtendimento: Atendimento[] = [];
 

  constructor() {
    
  }

  adicionarDados(dados: Atendimento) {
    this.ListaAtendimento.push(dados);
  }

  exibirDados() {
    return this.ListaAtendimento;
  }

}

export interface Atendimento {
  data: string;
  nome: string;
  raca: string;
  tutor: string;
  tipo: string;
  observacao: string;
}
