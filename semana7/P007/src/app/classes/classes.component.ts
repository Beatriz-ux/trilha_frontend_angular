import { Component, ElementRef, EventEmitter, HostListener, Input, Output, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrl: './classes.component.css',
})
export class ClassesComponent {
  @Input()
  categorias: string[] = [];

  @Input()
  title = '';
  
  constructor(private elemento: ElementRef, private renderizador: Renderer2) {
   

  }
  
  @Output () buscaCategoriaRealizada = new EventEmitter<any>();
  buscaCategoria(categoria: string): void {
    this.buscaCategoriaRealizada.emit(categoria);
  }
  ngOnInit(): void {
    this.renderizador.setStyle(this.elemento.nativeElement, 'box-shadow', '2px 2px 10px 2px rgba(147, 8, 207, 0)');
  }

  @HostListener('mouseenter') onMouseEnter(): void {
    this.renderizador.setStyle(this.elemento.nativeElement, 'box-shadow', '2px 2px 10px 2px rgba(147, 8, 207, 0.5)');
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    this.renderizador.setStyle(this.elemento.nativeElement, 'box-shadow', '2px 2px 10px 2px rgba(147, 8, 207, 0)');

  }


}
