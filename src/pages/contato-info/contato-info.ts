import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

/*
  Generated class for the ContatoInfo page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-contato-info',
  templateUrl: 'contato-info.html'
})
export class ContatoInfoPage {

  info: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    console.log("Dados recebidos: ", navParams.get('info'));
    this.info = navParams.get('info');
  }

}
