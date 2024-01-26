import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeTransform'
})
export class PipeTransformPipe implements PipeTransform {

  transform(texto: string, chave : string): string {
    if (!chave || chave === '') {
      return texto;
    }

    const regex = new RegExp(chave, 'gi');
    return texto.replace(regex, '<mark style="background:red">$&</mark>');
  }

}
