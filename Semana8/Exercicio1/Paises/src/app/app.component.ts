import { Component } from '@angular/core';
import { ListaPaisesService } from './lista-paises.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Paises';
  lista_paises: { nome: string, populacao: number }[] = [];

  constructor(private service: ListaPaisesService) {}
  // ngOnInit(){
  //   this.lista_paises = this.service.buscaAPI()
  //   .then((data: { nome: string; populacao: number }[]) => {
  //     this.lista_paises = data;
  //     console.log(data);
  //   });
  // }
  ngOnInit() {}

  getdados() {
    this.service
      .buscaAPI()
      .then((data: Country[]) => {
        this.lista_paises = data.map((pais) => ({
          nome: pais.name.common,
          populacao: pais.population,
        }));
        console.log(this.lista_paises);
      });
  }
}

interface Country {
  name: {
    common: string;
  };
  population: number;
}
