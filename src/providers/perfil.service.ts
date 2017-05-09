import { Observable } from 'rxjs/observable';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class PerfilService {

  constructor(public http: Http) {
    
  }

  getDisciplinas(): Observable<[{}]> {
    let url = 'data/disciplinas.json';
    //let url = 'http://www.feagri.unicamp.br/portal/sistemas-intranet/disciplinas';
    return this.http.get(url)
      .map((res:Response) => res.json() as [{}]);
  }

}
