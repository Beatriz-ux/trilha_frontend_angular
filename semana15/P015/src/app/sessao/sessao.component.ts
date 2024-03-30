import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IPig, IWeights } from '../model/usuario.model';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { StorageService } from '../service/storage.service';
import { map, switchMap } from 'rxjs';
import { IPorco, ISessao } from '../model/sessao.model';

@Component({
  selector: 'app-sessao',
  templateUrl: './sessao.component.html',
  styleUrl: './sessao.component.css',
})
export class SessaoComponent {
  dropdownList = [] as { item_id: string; item_text: string }[];
  selectedItems: { item_id: string; item_text: string }[] = [];
  dropdownSettings = {} as IDropdownSettings;
  sessoes: ISessao[] = [];
  selectedSessao: ISessao = {} as ISessao;
  suinos: IPig[] = [];
  cadastroForm = new FormGroup({
    data: new FormControl('', Validators.required),
    descricao: new FormControl('', [Validators.required]),
    atividades: new FormControl('', [Validators.required]),
  });

  constructor(private storageService: StorageService) {}

  ngOnInit(): void {
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Selecionar Todos',
      unSelectAllText: 'Desmarcar Todos',
      itemsShowLimit: 6,
      allowSearchFilter: true,
    };

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

          this.dropdownList = this.suinos.map((pig) => {
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

  onSubmit(): void {
    if (this.cadastroForm.invalid) {
      return;
    }
    const formValue = this.cadastroForm.value;
    const userData = localStorage.getItem('userData');

    const cadastro: ISessao = {
      idUser: userData ? JSON.parse(userData).id : '',
      data: formValue.data || '',
      descricao: formValue.descricao || '',
      atividades: formValue.atividades?.split(';') || [],
      porcos: this.selectedItems.map((selected) => {
        return {
          idPig: selected.item_id,
          atividadesCompletas: [],
        };
      }),
    };

    this.storageService.addCadastroSessao(cadastro);

    this.cadastroForm.reset();
  }
  onItemSelect(item: any) {
    this.selectedItems.push(item);
    console.log(this.selectedItems);
  }

  onSelectAll(items: any) {
    this.selectedItems = items;
    console.log(this.selectedItems);
  }

  onItemDeSelect(item: any) {
    this.selectedItems = this.selectedItems.filter(
      (selected) => selected.item_id !== item.item_id
    );
    console.log(this.selectedItems);
  }
  onDeSelectAll(items: any) {
    this.selectedItems = [];
    console.log(this.selectedItems);
  }

  exibirSessao(event: any) {
    const id = event.target.value;
    const formattedSessoes = this.sessoes.map((sessao) => {
      return {
        ...sessao,
        porcos: sessao.porcos.map((porco) => {
          return {
            ...porco,
            atividadesCompletas: porco.atividadesCompletas || [],
          };
        }),
      };
    });
    this.selectedSessao =
      formattedSessoes.find((sessao) => sessao.id === id) || ({} as ISessao);
    console.log(this.selectedSessao);
  }

  atualizarAtividade(atividade: string, porco: IPorco) {
    const porcoSelecionado = this.selectedSessao.porcos.find(
      (porcoSessao) => porcoSessao.idPig === porco.idPig
    );
    if (porcoSelecionado) {
      if (porcoSelecionado.atividadesCompletas.includes(atividade)) {
        porcoSelecionado.atividadesCompletas =
          porcoSelecionado.atividadesCompletas.filter(
            (atividadeCompleta) => atividadeCompleta !== atividade
          );
      } else {
        porcoSelecionado.atividadesCompletas.push(atividade);
      }
      
      this.selectedSessao = {
        ...this.selectedSessao,
        porcos: this.selectedSessao.porcos.map((porcoSessao) => {
          return porcoSessao.idPig === porco.idPig
            ? porcoSelecionado
            : porcoSessao;
        }),
      };
    }
  }

  salvarSessao() {
    this.storageService.atualizarSessao(this.selectedSessao);
  }

  formatDate(date: string) {
    return new Date(date).toLocaleDateString();
  }

}
