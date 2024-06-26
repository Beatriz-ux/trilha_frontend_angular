import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../service/storage.service';
import { IPig, IWeights, Usuario } from '../../model/usuario.model';
import { forkJoin, of, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-minha-producao',
  templateUrl: './minha-producao.component.html',
  styleUrl: './minha-producao.component.css',
})
export class MinhaProducaoComponent implements OnInit {
  suinos: IPig[] = [];
  pesos: IWeights[] = [];

  constructor(private storageService: StorageService) {}

  ngOnInit(): void {
    let user = JSON.parse(localStorage.getItem('userData') || '{}');
    //granti que o user é do tipo Usuario

    this.storageService
      .listarSuinos()
      .pipe(
        switchMap((suinosObj: { [key: string]: IPig }) => {
          this.suinos = Object.keys(suinosObj).map((key) => {
            return { ...suinosObj[key], id: key };
          });
          if (user && user.id) {
            this.suinos = this.suinos.filter((pig) => pig.idUser === user.id);
          } else {
            this.suinos = [];
          }
          // Cria um array de observables para cada chamada listarPesosSuino
          const pesosObservables = this.suinos.map((pig) =>
            pig.idPig
              ? this.storageService.listarPesosSuino(pig.idPig).pipe(
                  tap((pesosArray: IWeights[]) => {
                    pig.weights = pesosArray; // Adicione os pesos ao porco específico
                  })
                )
              : of(null)
          );

          // Retorna um único observable que emite quando todos os observables em pesosObservables emitem
          return forkJoin(pesosObservables);
        })
      )
      .subscribe();
  }
}
