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

  //constructor(public navCtrl: NavController, public navParams: NavParams, private connSrv: ConnectionService) {}
  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http) {
    this.http.get('data/contatos.json')
      .map(res => res.json())
      .subscribe(data => {
            this.contatos = data;
      });
  }

}
