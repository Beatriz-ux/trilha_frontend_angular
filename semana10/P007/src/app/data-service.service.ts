import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  private buscaRealizada = new Subject<any>();

  constructor(private http: HttpClient) { 

  }
  buscarDados(arquivo: string): void {
    fetch(`assets/dados/${arquivo}.json`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.buscaRealizada.next(data);
      });
  }
  getBuscaRealizada() {
    return this.buscaRealizada.asObservable();
  }

}
