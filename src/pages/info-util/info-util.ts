import { Http } from '@angular/http';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-info-util',
  templateUrl: 'info-util.html'
})
export class InfoUtilPage {

  //categorias: any[];
  categorias: any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http) {
    
    let url = 'http://www.feagri.unicamp.br/portal/templates/simplesimon/includes/weblinks.php';

    this.http.get(url)
      .map(res => res.json())
      .subscribe(data => {
        this.categorias = data;
      },
      err => {
        console.log(err);
      });

  } // End Constructor

}
