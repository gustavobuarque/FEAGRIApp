import { Http } from '@angular/http';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import 'rxjs/add/operator/map';


@Component({
  selector: 'page-circular-interno',
  templateUrl: 'circular-interno.html'
})
export class CircularInternoPage {

  circulares: any[];
  selectCircular: string;
  referencia: string;
  items: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http) {
    let url = 'assets/data/circular.json';
    //let url = 'http://www.feagri.unicamp.br/portal/app/contatos.json';

    this.http.get(url) // Acessa a Url
      .map(res => res.json()) // Converte o conteúdo da Url para JSON
      .subscribe(data => { // Passa o objeto JSON para dentro de um array na Classe ContatosPage
          this.items = data.CIRCULARES;
      },
      err => {
        console.log(err);
      });
  } // end constructor

  listarHorarios(): void{
    switch (this.selectCircular) {
      case '9':
        this.showData('9');
        break;
			case '69':
        this.showData('69');
				break;
		} // End switch	
  
  }

  showData(selectValue){
    this.circulares = this.items.filter((item)=>{
      return item.ID_PONTO == selectValue;
    });
  }

  

/*
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
*/
}
