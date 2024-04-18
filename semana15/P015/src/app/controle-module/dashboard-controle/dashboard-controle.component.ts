import { Component } from '@angular/core';
import { StorageService } from '../../service/storage.service';
import { IPig, IWeights } from '../../model/usuario.model';
import { map } from 'rxjs';
import { ISessao } from '../../model/sessao.model';

@Component({
  selector: 'app-dashboard-controle',
  templateUrl: './dashboard-controle.component.html',
  styleUrl: './dashboard-controle.component.css',
})
export class DashboardControleComponent {
  resultadosPeso: IWeights[] = [];
  suinos: IPig[] = [];
  controleAtividades = [] as {
    data: string;
    atividade: string;
    valor: string;
  }[];
  porcos = [] as { item_id: string; item_text: string }[];
  sessoes: ISessao[] = [];

  constructor(private storageService: StorageService) {}
  search(event: any) {
    this.controleAtividades = [];
    const idPig = event.target.value;
  
    this.storageService.listarPesosSuino(idPig).subscribe(
      (pesos) => {
        this.resultadosPeso = pesos;
        this.controleAtividades = this.resultadosPeso.map((peso) => ({
          data: peso.date,
          atividade: 'Pesagem',
          valor: peso.weight.toString(),
        }));
  
        const sessoes = this.filtraSessoesSuino(idPig);
        if (sessoes && sessoes.length > 0) {
          sessoes.forEach((element) => {
            const atividades = element.atividades.map((atv) => ({
              data: element.data,
              atividade: atv,
              valor: 'Pendente',
            }));
  
            const porco = element.porcos.find((pig) => pig.idPig === idPig);
            if (porco) {
              porco.atividadesCompletas.forEach((atvCompleta) => {
                const atvIndex = atividades.findIndex((atv) => atv.atividade === atvCompleta);
                if (atvIndex !== -1) atividades[atvIndex].valor = 'Concluida';
              });
            }
  
            this.controleAtividades.push(...atividades);
          });
        }
        this.exibePesos();
      },
      (error) => {
        console.error('Erro ao buscar os pesos', error);
      }
    );
  }
  
  exibePesos() {
    console.log("Chamou....");
    console.log(this.controleAtividades);
  }

  filtraSessoesSuino(idPig: string) {
    return this.sessoes.filter((sessao) =>
      sessao.porcos.some((porco) => porco.idPig === idPig)
    );
  }

  ngOnInit(): void {
    let user = JSON.parse(localStorage.getItem('userData') || '{}');

    this.storageService
      .listarSuinos()
      .pipe(
        map((suinosObj: { [key: string]: IPig }) => {
          this.suinos = Object.keys(suinosObj).map((key) => {
            return { ...suinosObj[key], id: key };
          });
          if (user && user.id) {
            this.suinos = this.suinos.filter((pig) => pig.idUser === user.id);
          } else {
            this.suinos = [];
          }

          this.porcos = this.suinos.map((pig) => {
            return {
              item_id: pig.idPig || '',
              item_text: pig.idPig || '',
            };
          });

          return this.suinos;
        })
      )
      .subscribe();

    this.storageService
      .listarSessoes()
      .pipe(
        map((sessoesObj: { [key: string]: ISessao }) => {
          this.sessoes = Object.keys(sessoesObj).map((key) => {
            return { ...sessoesObj[key], id: key };
          });
        })
      )
      .subscribe();
  }
}
