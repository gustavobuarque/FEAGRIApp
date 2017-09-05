import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limpaString'
})
@Injectable()
export class LimpaStringPipe implements PipeTransform {
  /*
    Pega um valor, divide a string em peedaços e os argumentos são as posições dentro do array.
   */

  transform(value, i:number) {
    const regex = /(?:<(FONT)[^>]*?>(.*?)<\/\1>)/g;
    const result = value.split(regex);
    return result[i];
  }
}
