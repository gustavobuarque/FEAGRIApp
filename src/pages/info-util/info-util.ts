import { Http } from '@angular/http';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-info-util',
  templateUrl: 'info-util.html'
})
export class InfoUtilPage {

  categorias: any;
  shownGroup = null;
  
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

  /*
    Aqui começa a parte do accordion
    Esse código peguei do site
    https://www.djamware.com/post/5892739480aca7411808fa9c/how-to-create-ionic-2-accordion-list
  */ 
  toggleGroup(group) {
    if (this.isGroupShown(group)) {
        this.shownGroup = null;
    } else {
        this.shownGroup = group;
    }
  }
  
  isGroupShown(group) {
      return this.shownGroup === group;
  }

}
