import { Http } from '@angular/http';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-contatos',
  templateUrl: 'contatos.html'
})
export class ContatosPage {

  contatos: any[];
  matriculas: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http) {

    let urlL = 'data/contatos.json';
    let urlR = 'http://www.feagri.unicamp.br/portal/templates/simplesimon/includes/contatos.json';
    
    this.http.get(urlL)
      .map(res => res.json())
      .subscribe(data => {
            this.contatos = data;
      },
      err => {
        console.log(err);
      });
  }

}
