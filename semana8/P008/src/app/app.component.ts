import { Component } from '@angular/core';
import { ListaNewsService } from './service/lista-news.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title_busca = '';
  lista_news: INews= {} as INews;
  lista_news_result: ISearch[] = [];
  qtd_result: number = 0;
  constructor(private service : ListaNewsService) {}
  ngOnInit() {
    const ultimaBusca = localStorage.getItem('lista_news');
    if (ultimaBusca) {
      this.lista_news_result = JSON.parse(ultimaBusca);
      this.qtd_result = this.lista_news_result.length;
    }
    const ultimaPesquisa = localStorage.getItem('pesquisa');
    if (ultimaPesquisa) {
      this.title_busca = ultimaPesquisa;
    }
    

  }
  onBuscaRealizada(termo: string){
    this.title_busca = termo;
    this.lista_news_result=[];
    this.service.buscaAPI(termo)
    .subscribe(
      (data) => {

      this.lista_news = data as INews;
      this.lista_news_result = this.lista_news.query.search;
      console.log(this.lista_news_result);
      this.qtd_result = this.lista_news_result.length;
      
      localStorage.setItem('lista_news', JSON.stringify(this.lista_news_result));
      localStorage.setItem('pesquisa', this.title_busca);
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
