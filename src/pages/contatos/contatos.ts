import { Http } from '@angular/http';
import { Component } from '@angular/core';
import { NavController, NavParams, ModalController} from 'ionic-angular';
import { ContatoInfoPage } from './../contato-info/contato-info';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-contatos',
  templateUrl: 'contatos.html'
})
export class ContatosPage {

  contatos: any[];
  info: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http, public modalCtrl: ModalController) {

    let urlL = 'data/contatos.json';
    let urlR = 'http://www.feagri.unicamp.br/portal/templates/simplesimon/includes/contatos.json';

    this.http.get(urlL) // Acessa a Url
      .map(res => res.json()) // Converte o conteúdo da Url para JSON
      .subscribe(data => { // Passa o objeto JSON para dentro de um array na Classe ContatosPage
            this.contatos = data;
      },
      err => {
        console.log(err);
      });

  }

  openInfo(i) : void {
    let modal = this.modalCtrl.create(ContatoInfoPage, {info: this.contatos[i]});
    modal.present();
  }

}
