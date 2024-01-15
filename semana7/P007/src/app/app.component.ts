import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'P007';
  dados: any = {};
  veiculos: string[] = [];

  onBuscaRealizada(event: any): void {
    this.dados = event;
  }

  getCategorias(): string[] {
    return Object.keys(this.dados);
  }

  onBuscaCategoriaRealizada(event: string): void  {
    let nameVeiculos = [];
   
    for (let veiculo of this.dados[event]) {
      nameVeiculos.push(veiculo.Name);
    }
    this.veiculos = nameVeiculos;
  }

}
