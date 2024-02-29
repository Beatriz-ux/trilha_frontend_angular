import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'P007';
  dados: any = {};
  veiculos: string[] = [];
  categoria = '';
  atributos: string[] = [];
  veiculo = '';
  value = '';
  veiculosAdicionados: string[] = [];
  propriedade: string = '';

  onBuscaRealizada(event: any): void {
    this.dados = event;
  }

  getCategorias(): string[] {
    return Object.keys(this.dados);
  }

  onBuscaCategoriaRealizada(event: string): void {
    this.atributos = [];
    this.veiculos = [];
    this.value = '';
    let nameVeiculos = [];

    this.categoria = event;

    for (let veiculo of this.dados[event]) {
      nameVeiculos.push(veiculo.Name);
    }
    this.veiculos = nameVeiculos;
  }

  onBuscaObjetoRealizada(event: string): void {
    this.value = '';
    this.veiculo = event;
    for (let veiculo of this.dados[this.categoria]) {
      if (veiculo.Name == event) {
        this.atributos = Object.keys(veiculo);
      }
    }
  }
  onBuscaPropriedadeRealizada(event: string): void {
    for (let veiculo of this.dados[this.categoria]) {
      if (veiculo.Name == this.veiculo) {
        this.value = veiculo[event];
      }
    }
    this.propriedade = event;
  }

  onAdcionar(): void {
    //verifica se ja xontem a palavra na lista

    if (!this.veiculosAdicionados.includes(this.veiculo) && this.veiculo != '')
      this.veiculosAdicionados.push(this.veiculo);

    this.atributos = [];
    this.veiculos = [];
    this.value = '';
    this.dados = {};
    this.veiculo = '';
    //salvar todos os dados desse arquivo e adicionar a uma lista
  }
}
