import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrl: './carrinho.component.css',
})
export class CarrinhoComponent {
  @Output() buscaRealizada = new EventEmitter<any>();
  constructor(private dataService: DataService) {}


  buscarDados(arquivo: string): void {

    console.log('buscarDados', arquivo);
    console.log( this.dataService.getData() );

  }
}
