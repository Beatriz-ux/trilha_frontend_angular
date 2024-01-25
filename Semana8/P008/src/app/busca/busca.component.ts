import { Component } from '@angular/core';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrl: './busca.component.css'
})
export class BuscaComponent {
  termo: string = "";
  buscar(){
    console.log(this.termo);
  }

}
