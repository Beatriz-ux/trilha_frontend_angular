import { Component, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrl: './busca.component.css'
})
export class BuscaComponent {
  termo: string = "";
  @Output() buscaRealizada = new EventEmitter<string>();
  buscar(){
    console.log(this.termo);
    this.buscaRealizada.emit(this.termo);
  }

}
