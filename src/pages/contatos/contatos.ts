import { Http } from '@angular/http';
import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import { ContatoInfoPage } from './../contato-info/contato-info';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-contatos',
  templateUrl: 'contatos.html'
})
export class ContatosPage {

  contatos: any[];
  info: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http) {

    //let url = 'data/contatos.json';
    let url = 'http://www.feagri.unicamp.br/portal/templates/simplesimon/includes/contatos.json';

    this.http.get(url) // Acessa a Url
      .map(res => res.json()) // Converte o conteúdo da Url para JSON
      .subscribe(data => { // Passa o objeto JSON para dentro de um array na Classe ContatosPage
            this.contatos = data;
      },
      err => {
        console.log(err);
      });

  }

  openInfo(i) : void {
    this.navCtrl.push(ContatoInfoPage, {info: this.contatos[i]})
  }

}
