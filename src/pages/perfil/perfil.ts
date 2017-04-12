import { Http } from '@angular/http';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html'
})
export class PerfilPage {

  disciplinas: any;
  nRAouMat: string;
  usuario: string;
  formacao: string;
  disc: any;
  anoIngresso: number;


  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http) {
    
    let url = 'data/disciplinas.json';
    //let url = 'http://www.feagri.unicamp.br/portal/sistemas-intranet/disciplinas';
    this.http.get(url)
      .map(res => res.json())
      .subscribe(data => {
        this.disciplinas = data;
        console.log(data);
      },
      err => {
        console.log(err);
      });
  }

  enviarPerfil() : void{
    console.log(this.nRAouMat);
    console.log(this.usuario);
    console.log(this.formacao);
    console.log(this.disc);
    console.log(this.anoIngresso);
  }
  

}
