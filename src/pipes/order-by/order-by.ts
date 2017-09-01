import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
@Injectable()
export class OrderByPipe implements PipeTransform {
  
  transform(arr){
    if(arr === undefined){return null;}
    return arr.sort((a, b) => {
      if (a.HORARIO < b.HORARIO) {
        return -1;
      }
      if (a.HORARIO > b.HORARIO) {
        return 1;
      }
      return 0;
    });
  }
}
