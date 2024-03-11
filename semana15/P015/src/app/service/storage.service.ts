import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  cadastrar(dadosUsuario: any){
    console.log(dadosUsuario);
    
  }
  criptografar(senha: string) {
    


  }
}
