import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrl: './classes.component.css',
})
export class ClassesComponent {
  @Input()
  categorias: string[] = [];

  // ngDoCheck(): void {
  //   if (this.categorias.length > 0) console.log(this.categorias);
  // }

  @Output () buscaCategoriaRealizada = new EventEmitter<any>();
  buscaCategoria(categoria: string): void {
    this.buscaCategoriaRealizada.emit(categoria);
  }
}
