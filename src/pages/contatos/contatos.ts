import { Http } from '@angular/http';
import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController} from 'ionic-angular';
import { ContatoInfoPage } from './../contato-info/contato-info';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-contatos',
  templateUrl: 'contatos.html'
})
export class ContatosPage {

  contatos: any[];
  items: any[];
  info: any;

  searchQuery: string = '';

  public loading = this.loadingCtrl.create({
    content: 'Carregando contatos ...'
  });

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private loadingCtrl: LoadingController,
    private http: Http
    ) {
    
    this.loading.present();

    //let url = 'data/contatos.json';
    let url = 'http://www.feagri.unicamp.br/portal/templates/simplesimon/includes/contatos.json';

    this.http.get(url) // Acessa a Url
      .map(res => res.json()) // Converte o conteúdo da Url para JSON
      .subscribe(data => { // Passa o objeto JSON para dentro de um array na Classe ContatosPage
          this.items = data;
          this.initializeItems();
      },
      err => {
        console.log(err);
      },
      () => {
        // Hide the loading message
        this.loading.dismiss();        
      });
  }

  initializeItems() {
    this.contatos = this.items;
  }

  getContatos(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.contatos = this.contatos.filter((contato) => {
        return (contato.nome.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  openInfo(i) : void {
    this.navCtrl.push(ContatoInfoPage, {info: this.contatos[i]})
  }

}
