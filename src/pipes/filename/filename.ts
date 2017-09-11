import { Injectable, Pipe } from '@angular/core';

/*
  Generated class for the FilenamePipe pipe.

  See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
  Angular 2 Pipes.
*/
@Pipe({
  name: 'filename'
})
@Injectable()
export class FilenamePipe {
  /*
    Pega apenas o nome do arquivo com a extensão de um caminho
  */

  transform(value, i:number) {
    const regex = /^(.+\/)*(.+)\/(.+)$/g;
    const result = value.split(regex);
    return result[i];
  }
}
