import { Component, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-valor-propriedade',
  templateUrl: './valor-propriedade.component.html',
  styleUrl: './valor-propriedade.component.css'
})
export class ValorPropriedadeComponent {
  subscription: Subscription = new Subscription();

  value = "";

  @Input()
  title = ""; 
  constructor(private elemento: ElementRef, private renderizador: Renderer2, private dataService: DataServiceService) {
   

  }
  ngOnInit(): void {
    this.subscription = this.dataService.getValue().subscribe((data) => {
      this.value = data;
    });
  }

  @HostListener('mouseenter') onMouseEnter(): void {
    this.renderizador.setStyle(this.elemento.nativeElement, 'box-shadow', '2px 2px 10px 2px rgba(147, 8, 207, 0.5)');
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    this.renderizador.setStyle(this.elemento.nativeElement, 'box-shadow', '2px 2px 10px 2px rgba(147, 8, 207, 0)');

  }
}
