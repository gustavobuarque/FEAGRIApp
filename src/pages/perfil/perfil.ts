import { Http } from '@angular/http';
import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html'
})
export class PerfilPage {

  perfilForm: FormGroup;

  disciplinas: any;
  nRAouMat: number;
  usuario: string;
  formacao: string;
  disc: any;
  anoIngresso: number;

  submitAttempt: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http, public alertCtrl: AlertController, public formBuilder: FormBuilder) {
    
    let url = 'data/disciplinas.json';
    //let url = 'http://www.feagri.unicamp.br/portal/sistemas-intranet/disciplinas';
    this.http.get(url)
      .map(res => res.json())
      .subscribe(data => {
        this.disciplinas = data;
      },
      err => {
        console.log(err);
      });

     this.perfilForm = formBuilder.group({
        nRAouMat: [ '', Validators.compose([Validators.maxLength(6), Validators.required]) ],
        usuario: [ '', Validators.required ],
        formacao: [ '' ],
        disc: [ '' ],
        anoIngresso: [ '' ]
     });

  }

  enviarPerfil() : void{
    this.submitAttempt = true;
    
    if(!this.perfilForm.valid){
      this.showAlert();
    } else {
      console.log("Sucesso no envio");
      console.log(this.perfilForm.value);
    }
    
  }
  
  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Aviso',
      subTitle: 'Todos os campos são obrigatórios!',
      buttons: ['OK']
    });
    alert.present();
  }
  

}
