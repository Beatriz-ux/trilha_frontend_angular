import { Component } from '@angular/core';
import { NumerosService } from './services/numeros.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ExercicioObservable';
  constructor(private service: NumerosService) {}
  numeros: number[] = [];

  ngOnInit() {
    this.getValores();
  }
  getValores() {
    this.service.getNumeros().subscribe((num) => {
      this.numeros.push(num);
    });
  }
}
