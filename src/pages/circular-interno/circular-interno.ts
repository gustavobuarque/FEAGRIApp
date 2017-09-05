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
    //let url = 'assets/data/circular.json';
    let url = 'http://www.feagri.unicamp.br/portal/app/circular.json';

    this.http.get(url) // Acessa a Url
      .map(res => res.json()) // Converte o conteúdo da Url para JSON
      .subscribe(data => { // Passa o objeto JSON para dentro de um array
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
}
