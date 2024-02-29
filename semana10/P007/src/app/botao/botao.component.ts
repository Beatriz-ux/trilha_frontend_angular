import { Component, EventEmitter, Output } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-botao',
  templateUrl: './botao.component.html',
  styleUrl: './botao.component.css'
})
export class BotaoComponent {

  constructor(private dataService: DataServiceService) {
    
  }

  adiciona(): void {
    this.dataService.adicionaVeiculo();
  }

}
