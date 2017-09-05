import { Http } from '@angular/http';
import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-grade-horaria',
  templateUrl: 'grade-horaria.html'
})
export class GradeHorariaPage {

  public loading = this.loadingCtrl.create({
        content: 'Carregando...'
    });
  horarios: any[];
  diasemana: string;
  fimdesemana: boolean = false;

  constructor(
      public navCtrl: NavController, 
      public navParams: NavParams, 
      private http: Http, 
      private loadingCtrl: LoadingController
    ) {

    // Show the loading message
    this.loading.present();

    let hoje = new Date();
    let semana = '';
    let diasemana = '';
    let semestre = '';
    let mes = hoje.getMonth();
    let ano = hoje.getFullYear();

      /* correção para 1º semestre ou 2º Semestre */
      if (mes >= 7) {
        semestre = "2";
      } else {
        semestre = "1";
      }
      switch (new Date().getDay()) {
          case 0:
              semana = "0domingo";
              this.fimdesemana = true;
              this.diasemana = "Domingo"
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
              this.fimdesemana = true;
              diasemana = "Sábado"
      } // End Switch

      this.diasemana = diasemana;
      
      //let url = 'data/gradehoraria.json';
      let url = 'http://www.feagri.unicamp.br/portal/sistemas-intranet/grade-horarios?salaaula_ativa=S&salaaula_ano='+ano+'&salaaula_anosemestre="'+semestre+'"&salaaula_semana='+semana;
      
      this.http.get(url) // Acessa a Url
        .map(res => res.json()) // Converte o conteúdo da Url para JSON
        .subscribe(data => { // Passa o objeto JSON para dentro de um array na Classe ContatosPage
              this.horarios = data;
        },
        err => {
          console.log(err);
        },
        () => {
            this.loading.dismiss();
        });
  
  } //End Constructor

}
