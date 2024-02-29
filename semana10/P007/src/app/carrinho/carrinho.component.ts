import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrl: './carrinho.component.css',
})
export class CarrinhoComponent {

  constructor(private dataService: DataServiceService) {
  }
  buscarDados(arquivo: string): void {

    this.dataService.buscarDados(arquivo);
    
  }
}
