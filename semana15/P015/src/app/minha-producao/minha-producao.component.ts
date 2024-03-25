import { Component, OnInit } from '@angular/core';
import { StorageService } from '../service/storage.service';
import { IPig, IWeights } from '../model/usuario.model';

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
    this.storageService.listarSuinos().subscribe((suinos) => {
      this.suinos = suinos;
    });
  }
}
