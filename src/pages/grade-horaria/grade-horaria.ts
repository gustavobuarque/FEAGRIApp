import { Http } from '@angular/http';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import 'rxjs/add/operator/map';

/*
  Generated class for the GradeHoraria page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-grade-horaria',
  templateUrl: 'grade-horaria.html'
})
export class GradeHorariaPage {

  horarios: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http) {

    let hoje = new Date();
    let semana = '';
    let diasemana = '';
    let ano = hoje.getFullYear();
      switch (new Date().getDay()) {
          case 0:
              semana = "0domingo";
              diasemana = "Domingo"
              break;
          case 1:
              semana = "1segunda";
              diasemana = "Segunda-feira"
              break;
          case 2:
              semana = "2terça";
              diasemana = "Terça-feira"
              break;
          case 3:
              semana = "3quarta";
              diasemana = "Quarta-feira"
              break;
          case 4:
              semana = "4quinta";
              diasemana = "Quinta-feira"
              break;
          case 5:
              semana = "5sexta";
              diasemana = "Sexta-feira"
              
              break;
          case 6:
              semana = "6sábado";
              diasemana = "Sábado"
      } // End Switch
      console.log("Semana " + semana + " Ano " + ano);

      let url = 'data/gradehoraria.json';
      //let url = "http://www.feagri.unicamp.br/portal/sistemas-intranet/grade-horarios?salaaula_ativa=S&salaaula_ano="+ano+"&salaaula_anosemestre=1&salaaula_semana="+semana;

      this.http.get(url) // Acessa a Url
        .map(res => res.json()) // Converte o conteúdo da Url para JSON
        .subscribe(data => { // Passa o objeto JSON para dentro de um array na Classe ContatosPage
              this.horarios = data;
        },
        err => {
          console.log(err);
        });
  
  } //End Constructor

}
