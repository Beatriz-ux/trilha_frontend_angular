import { Component, ElementRef, EventEmitter, HostListener, Input, Output, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-propriedades',
  templateUrl: './propriedades.component.html',
  styleUrl: './propriedades.component.css'
})
export class PropriedadesComponent {
  @Input() 
  atributos: string[] = [];

  @Input()
  title = '';
  
  @Output() buscaPropriedadeRealizada = new EventEmitter<string>();

  constructor(private elemento: ElementRef, private renderizador: Renderer2) {
   

  }
  @HostListener('mouseenter') onMouseEnter(): void {
    this.renderizador.setStyle(this.elemento.nativeElement, 'box-shadow', '2px 2px 10px 2px rgba(147, 8, 207, 0.5)');
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    this.renderizador.setStyle(this.elemento.nativeElement, 'box-shadow', '2px 2px 10px 2px rgba(147, 8, 207, 0)');

  }
  buscaPropriedade(atributo : string): void {
    this.buscaPropriedadeRealizada.emit(atributo);
   
  }
  


}
