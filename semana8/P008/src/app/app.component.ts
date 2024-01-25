import { Component } from '@angular/core';
import { ListaNewsService } from './service/lista-news.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'P008';
  constructor(private service : ListaNewsService) {}
}
