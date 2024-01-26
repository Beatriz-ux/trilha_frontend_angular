import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrl: './busca.component.css'
})
export class BuscaComponent {
  termo: string = "";
  @Input() qtd: string = "0";
  @Output() buscaRealizada = new EventEmitter<string>();
  buscar(){
    console.log(this.termo);
    this.buscaRealizada.emit(this.termo);
  }

}
