import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPig, IUser, IWeights } from '../model/usuario.model';
import { AuthService } from './auth.service';
import {
  Observable,
  catchError,
  map,
  of,
  switchMap,
  take,
  throwError,
} from 'rxjs';

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

  listarUsuarios() {
    return this.http
      .get<any>('https://residencia-tic-default-rtdb.firebaseio.com/users.json')
      .pipe(
        map((data) => {
          return {
            name: data.name,
            nameFarm: data.nameFarm,
            email: data.email,
            Piggers: data.Piggers,
          } as IUser;
        })
      );
  }

  criptografar(senha: string) {}

  addCadastroSuino(cadastro: IPig) {
    const userData = localStorage.getItem('userData');

    console.log(userData);

    if (userData) {
      var pigId = cadastro.id;
      const user = JSON.parse(userData);
      console.log(user);
      return this.http
        .post(
          `https://residencia-tic-default-rtdb.firebaseio.com/users/${user.id}/${pigId}.json`,
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

  listarSuinos() {
    const userData = localStorage.getItem('userData');

    if (userData) {
      const user = JSON.parse(userData);
      return this.http
        .get<{ [key: string]: { [key: string]: IPig } }>(
          `https://residencia-tic-default-rtdb.firebaseio.com/users/${user.id}.json`
        )
        .pipe(
          map((responseData) => {
            const pigArray: IPig[] = [];
            for (const pigId in responseData) {
              if (responseData.hasOwnProperty(pigId)) {
                for (const key in responseData[pigId]) {
                  if (responseData[pigId].hasOwnProperty(key)) {
                    pigArray.push({ ...responseData[pigId][key], id: key });
                  }
                }
              }
            }
            return pigArray;
          })
        );
    }

    console.log('Usuário não autenticado');
    return of([] as IPig[]);
  }

  addPesoToSuino(userId: string, peso: IWeights) {
    const userData = localStorage.getItem('userData');

    if (userData) {
      const user = JSON.parse(userData);
      return this.http
        .post(
          `https://residencia-tic-default-rtdb.firebaseio.com/pesos/${user.id}/${userId}/.json`,
          peso
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

  listarPesosSuino(userId: string) {
    const userData = localStorage.getItem('userData');

    if (userData) {
      const user = JSON.parse(userData);
      return this.http
        .get<{ [key: string]: IWeights }>(
          `https://residencia-tic-default-rtdb.firebaseio.com/pesos/${userId}.json`
        )
        .pipe(
          map((responseData) => {
            const pesoArray: IWeights[] = [];
            for (const key in responseData) {
              if (responseData.hasOwnProperty(key)) {
                pesoArray.push({ ...responseData[key], id: key });
              }
            }
            return pesoArray;
          })
        );
    }

    console.log('Usuário não autenticado');
    return of([] as IWeights[]);
  }
}
