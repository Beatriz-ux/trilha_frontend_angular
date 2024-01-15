import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrl: './carrinho.component.css',
})
export class CarrinhoComponent {
  @Output() buscaRealizada = new EventEmitter<any>();

  buscarDados(arquivo: string): void {

    //mostrar no console o arquivo veiculos.json que esta na pasta dados

    fetch(`assets/dados/${arquivo}.json`)
      .then((response) => response.json())
      .then((data) => {
        this.buscaRealizada.emit(data);
      });

  }
}
