import { Component } from '@angular/core';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrl: './carrinho.component.css',
})
export class CarrinhoComponent {
  dados: any[] = [];

  buscarDados(arquivo: string): void {
    console.log('arquivo');
    //mostrar no console o arquivo veiculos.json que esta na pasta dados

    fetch(`assets/dados/${arquivo}.json`)
      .then((response) => response.json())
      .then((data) => {
        this.dados = data;
        console.log(this.dados);
      });
  }
}
