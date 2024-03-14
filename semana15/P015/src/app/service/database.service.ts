import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService implements OnInit {
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
