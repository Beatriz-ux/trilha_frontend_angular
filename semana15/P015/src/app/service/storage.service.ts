import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPig, IUser } from '../model/usuario.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  cadastrar(dadosUsuario: IUser) {
    console.log(dadosUsuario);
    return this.http
      .post(
        'https://residencia-tic-default-rtdb.firebaseio.com/users.json',
        dadosUsuario
      )
      .subscribe(
        (response) => {
          console.log('Resposta da solicitação:', response);
        },
        (error) => {
          console.error('Erro na solicitação:', error);
        }
      );
  }

  criptografar(senha: string) {}

  addCadastroSuino(cadastro: IPig) {
    const userData = localStorage.getItem('userData');

    console.log(userData);

    if (userData) {
      const user = JSON.parse(userData);
      console.log(user);
      return this.http
        .post(
          `https://residencia-tic-default-rtdb.firebaseio.com/users/${user.id}.json`,
          cadastro
        )
        .subscribe(
          (response) => {
            console.log('Resposta da solicitação:', response);
          },
          (error) => {
            console.error('Erro na solicitação:', error);
          }
        );
    }

    return console.log('Usuário não autenticado');
  }
}

// export class DatabaseService implements OnInit {
//   constructor(private http: HttpClient) {}

//   ngOnInit(): void {}

//   addCadastroSuino(cadastro: any) {
//     return this.http.post('http://localhost:3000/cadastro', cadastro);
//   }

//   getCadastroSuinos() {
//     return this.http.get('http://localhost:3000/cadastro');
//   }

//   addPesoSuino(peso: any) {
//     return this.http.post('http://localhost:3000/peso', peso);
//   }

//   putPesoSuino(peso: any) {
//     return this.http.put('http://localhost:3000/peso', peso);
//   }
// }
