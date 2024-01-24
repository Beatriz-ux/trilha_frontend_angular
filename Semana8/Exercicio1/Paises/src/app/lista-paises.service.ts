import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ListaPaisesService {
  constructor() {}
  private apiUrl = 'https://restcountries.com/v3.1/all';

  lista_paises: { nome: string; populacao: number }[] = [];
  nomes_paises: any;

  buscaAPI():  Promise<any> {
    return fetch('https://restcountries.com/v3.1/all')
      .then((response) => response.json())
      .catch(error => {
        console.error('There was an error!', error);
      });
  }
 
}

