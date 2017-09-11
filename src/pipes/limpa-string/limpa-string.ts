import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limpaString'
})
@Injectable()
export class LimpaStringPipe implements PipeTransform {
  /*
    Retira o texto dentro da tag FONT que está no cardápio.
  */

  transform(value, i:number) {
    const regex = /(?:<(FONT)[^>]*?>(.*?)<\/\1>)/g;
    const result = value.split(regex);
    return result[i];
  }
}
