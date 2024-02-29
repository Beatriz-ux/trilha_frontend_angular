import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-botao',
  templateUrl: './botao.component.html',
  styleUrl: './botao.component.css'
})
export class BotaoComponent {
  @Output() 
  adicionar = new EventEmitter<string>();

  adiciona(): void {
    this.adicionar.emit();
  }

}
