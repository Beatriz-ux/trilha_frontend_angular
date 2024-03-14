import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../model/usuario.model';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor(private http: HttpClient) {}

  cadastrar(dadosUsuario: IUser) {
    console.log(dadosUsuario);
    return this.http.post('https://residencia-tic-default-rtdb.firebaseio.com/users.json', dadosUsuario)
      .subscribe(response => {
        console.log('Resposta da solicitação:', response);
      }, error => {
        console.error('Erro na solicitação:', error);
      });
  }
  
  criptografar(senha: string) {}
}
