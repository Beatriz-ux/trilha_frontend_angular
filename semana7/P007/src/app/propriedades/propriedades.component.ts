import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-propriedades',
  templateUrl: './propriedades.component.html',
  styleUrl: './propriedades.component.css'
})
export class PropriedadesComponent {
  @Input() 
  atributos: string[] = [];

  @Output() buscaPropriedadeRealizada = new EventEmitter<string>();

  buscaPropriedade(atributo : string): void {
    this.buscaPropriedadeRealizada.emit(atributo);
   
  }


}
