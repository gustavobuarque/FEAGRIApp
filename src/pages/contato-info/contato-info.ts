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
  showlattes: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.info = navParams.get('info');
    if(this.info.lattes){
      this.showlattes = true;
    }
  }

  openLattes() {
      window.open(this.info.lattes, '_blank');
  }

}
