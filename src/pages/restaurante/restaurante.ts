
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-restaurante',
  templateUrl: 'restaurante.html'
})
export class RestaurantePage {

  serchQuery: string='';

  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
    ){
      
    } 
    

  ionViewDidLoad() {
    console.log('ionViewDidLoad RestaurantePage');
  }

}
