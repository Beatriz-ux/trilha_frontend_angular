import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'P007';
  dados: any = {};

  onBuscaRealizada(event: any): void {
    this.dados = event;
  }

  getCategorias(): string[] {
    return Object.keys(this.dados);
  }

  onBuscaCategoriaRealizada(): void {
    
  }
}
