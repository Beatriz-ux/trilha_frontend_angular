import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-objetos',
  templateUrl: './objetos.component.html',
  styleUrl: './objetos.component.css'
})
export class ObjetosComponent {
  @Input()
  veiculos: string[] = [];

  @Output() buscaObjetoRealizada = new EventEmitter<string>();

  buscaObjeto(event: string): void {
    this.buscaObjetoRealizada.emit(event);

  }



}
