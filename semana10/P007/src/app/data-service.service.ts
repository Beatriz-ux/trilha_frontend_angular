import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataServiceService {
  private buscaRealizada = new Subject<any>();
  private veiculos = new Subject<any>();
  private atributos = new Subject<any>();
  private value = new Subject<any>();
  private salve = new Subject<any>();
  private dados: any = {};
  categoria = '';
  nameVeiculo: string = '';
  veiculosAdicionados: string[] = [];

  constructor(private http: HttpClient) {}
  buscarDados(arquivo: string): void {
    fetch(`assets/dados/${arquivo}.json`)
      .then((response) => response.json())
      .then((data) => {
        this.buscaRealizada.next(data);
        this.dados = data;
      });
    this.value.next('');
    this.atributos.next([]); // Emitir um array vazio para limpar o conteúdo
    this.veiculos.next([]);
  }
  getBuscaRealizada() {
    return this.buscaRealizada.asObservable();
  }
  buscarVeiculos(categoria: string): void {
    if (this.dados) {
      // Verifica se os dados dos veículos foram carregados
      const veiculosCategoria = this.dados[categoria]; // Filtra os veículos pela categoria
      const nomesVeiculos = veiculosCategoria.map(
        (veiculo: any) => veiculo.Name
      );
      this.veiculos.next(nomesVeiculos);
      this.categoria = categoria;
      this.value.next('');
    this.atributos.next([]);
    }
  }
  getVeiculos() {
    return this.veiculos.asObservable();
  }

  buscarAtributos(veiculo: string): void {
    if (this.dados) {
      const veiculoSelecionado = this.dados[this.categoria].find(
        (veiculoAtual: any) => veiculoAtual.Name === veiculo
      );
      const atributos = Object.keys(veiculoSelecionado);
      this.atributos.next(atributos);
      this.nameVeiculo = veiculo;
      this.value.next('');

    }
  }
  getAtributos() {
    return this.atributos.asObservable();
  }

  buscaValuePropriedade(propriedade: string) {
    if (this.dados) {
      const veiculoSelecionado = this.dados[this.categoria].find(
        (veiculoAtual: any) => veiculoAtual.Name === this.nameVeiculo
      );
      const value = veiculoSelecionado[propriedade];
      this.value.next(value);
    }
  }
  getValue() {
    return this.value.asObservable();
  }

  adicionaVeiculo(): void {
    this.salve.next(this.nameVeiculo);
    this.value.next('');
    this.atributos.next([]); // Emitir um array vazio para limpar o conteúdo
    this.veiculos.next([]); // Emitir um array vazio para limpar o conteúdo
  }

  getSalve() {
    return this.salve.asObservable();
  }
}
