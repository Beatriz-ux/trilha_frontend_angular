import { Component, ElementRef, EventEmitter, HostListener, Input, Output, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-objetos',
  templateUrl: './objetos.component.html',
  styleUrl: './objetos.component.css'
})
export class ObjetosComponent {
  @Input()
  veiculos: string[] = [];

  @Input()
  title = '';
  
  @Output() buscaObjetoRealizada = new EventEmitter<string>();

  constructor(private elemento: ElementRef, private renderizador: Renderer2) {
  }
  buscaObjeto(event: string): void {
    this.buscaObjetoRealizada.emit(event);

  }

  @HostListener('mouseenter') onMouseEnter(): void {
    this.renderizador.setStyle(this.elemento.nativeElement, 'box-shadow', '2px 2px 10px 2px rgba(147, 8, 207, 0.5)');
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    this.renderizador.setStyle(this.elemento.nativeElement, 'box-shadow', '2px 2px 10px 2px rgba(147, 8, 207, 0)');

  }



}
