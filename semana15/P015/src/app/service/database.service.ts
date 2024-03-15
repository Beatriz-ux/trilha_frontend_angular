import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService implements OnInit {
  //Variaveis que vou precisar:
  //listaSuinos(lista dos suinos de determinado usuario, isso que vai ser mostrado no minha Produção)
  //listaPesos(lista dos pesos de determinado suino)
  //o nome do usuario logado
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  addCadastroSuino(cadastro: any) {
    return this.http.post('http://localhost:3000/cadastro', cadastro);
  }

  getCadastroSuinos() {
    return this.http.get('http://localhost:3000/cadastro');
  }

  addPesoSuino(peso: any) {
    return this.http.post('http://localhost:3000/peso', peso);
  }

  putPesoSuino(peso: any) {
    return this.http.put('http://localhost:3000/peso', peso);
  }
}
