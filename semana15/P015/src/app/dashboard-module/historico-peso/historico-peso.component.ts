import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StorageService } from '../../service/storage.service';
import { filter, map } from 'rxjs';
import { IPig, IWeights } from '../../model/usuario.model';

@Component({
  selector: 'app-historico-peso',
  templateUrl: './historico-peso.component.html',
  styleUrl: './historico-peso.component.css',
})
export class HistoricoPesoComponent {
  //service banco
  tagsPorcos = [] as string[];
  cadastroForm = new FormGroup({
    brincoAnimal: new FormControl('', [
      Validators.required
    ]),
    peso: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]*$'),
    ]),
    data: new FormControl('', Validators.required)
  });

  constructor(private storageService: StorageService) {}

  ngOnInit(): void {
    let user = JSON.parse(localStorage.getItem('userData') || '{}');

    // this.storageService
    //   .listarSuinos()
    //   .pipe(
    //     map((suinosObj: { [key: string]: IPig }) => {
    //       this.suinos = Object.keys(suinosObj).map((key) => {
    //         return { ...suinosObj[key], id: key };
    //       });
    //       if (user && user.id) {
    //         this.suinos = this.suinos.filter((pig) => pig.idUser === user.id);
    //       } else {
    //         this.suinos = [];
    //       }

    //       this.tagsPorcos = this.suinos.map((pig) => {
    //         return pig.idPig;
    //       });

    //       return this.suinos;
    //     })
    //   )
    //   .subscribe();
    this.storageService.listarSuinos()
      .pipe(
        map(suinosObj => Object.values(suinosObj)), // Converte o objeto em array
        map(suinosArray => suinosArray.filter(pig => pig.idUser === user.id)) // Filtra o array
      )
      .subscribe(filteredPigs => {
        this.tagsPorcos = filteredPigs.map(pig => pig.idPig).filter(id => id !== undefined) as string[];
      });
  }

  onSubmit(): void {
    console.log(this.cadastroForm.value);
    //verifica se o form é valido
    if (!this.cadastroForm.valid) {
      console.log('Formulário inválido');
      return;
    }

    //cria umas const do tipo IWeigth
    const peso : IWeights = {
      idPig: this.cadastroForm.value.brincoAnimal as string,
      weight: Number(this.cadastroForm.value.peso),
      date: this.cadastroForm.value.data as string,
    } ;
    if (peso.idPig === '' || peso.idPig === null || peso.idPig === undefined) {
      console.log('Porco não encontrado');
      return;
    }

    this.storageService.addPesoToSuino(peso.idPig,peso);
    //service
    /* Aqui precisa ta o codigo para salvar isso no banco, já linkando ao user */
  }
}
