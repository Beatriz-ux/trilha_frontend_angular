import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListaNewsService {

  constructor(private http: HttpClient) { }

  buscaAPI(assuntoABuscar : string){
    return this.http.get(`https://pt.wikipedia.org/w/api.php?action=query&list=search&srsearch=${assuntoABuscar}&format=json&origin=*`)
  }
  

}

