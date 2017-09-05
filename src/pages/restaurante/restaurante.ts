import { Http } from '@angular/http';

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import 'rxjs/add/operator/map';


@Component({
  selector: 'page-restaurante',
  templateUrl: 'restaurante.html'
})
export class RestaurantePage {

  items: any[];
  dias: string[];
  cardapioHoje: any[];
   
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private http: Http
    ){

      //let url = 'assets/data/cardapio.json';
      let url = 'http://www.feagri.unicamp.br/portal/app/cardapio.json';
  
      this.http.get(url) // Acessa a Url
        .map(res => res.json()) // Converte o conteúdo da Url para JSON
        .subscribe(data => { // Passa o objeto JSON para dentro de um array na Classe ContatosPage
            this.items = data.CARDAPIO;
            this.showData(this.dataHoje());
        },
        err => {
          console.log(err);
        });

    } 

    dataHoje(): string {
      let hoje = new Date();
      let meses = ['01','02','03','04','05','06','07','08','09','10','11','12'];
      let d = '';

      if(hoje.getDate() < 10){
        d = '0' + hoje.getDate().toString(); 
      } else {
        d = hoje.getDate().toString(); 
      }
  
      let m = hoje.getMonth()+1;
      let y = hoje.getFullYear();
      let ymd = hoje.getFullYear() + '-' + meses[hoje.getMonth()] + '-' + d;

      return ymd;
    }
    
    diaSemana(): string {
      let dias = ['Segunda','Terça', 'Quarta', 'Quinta', 'Sexta'];
      return dias[new Date().getDay()-1];
    }

    fimSemana(): boolean{
      if(new Date().getDay() == 0 || new Date().getDay() == 6 ){
        return true;
      }
      return false;
    }

    showData(selectValue){
      this.cardapioHoje = this.items.filter((item)=>{
        return item.DATA == selectValue;
      });
    }

}
