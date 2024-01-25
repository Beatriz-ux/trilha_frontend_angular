import { Component } from '@angular/core';
import { ListaNewsService } from './service/lista-news.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'P008';
  lista_news: INews[] = [];
  constructor(private service : ListaNewsService) {}
  onBuscaRealizada(termo: string){
    this.service.buscaAPI(termo)
    .subscribe(
      (data) => {

      this.lista_news = data as INews[];
      console.log(data);
    }
    );
    
  }
}
interface INews {
  batchcomplete:string;
  continue:{};
  query: IQuery;
}
interface IQuery {
  searchinfo:{};
  search: ISearch[];
}
interface ISearch {
  ns:number;
  title:string;
  pageid:number;
  size:number;
  wordcount:number;
  snippet:string;
}
