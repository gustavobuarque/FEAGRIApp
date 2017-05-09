import { PerfilService } from './../../providers/perfil.service';
import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
  providers: [PerfilService]
})
export class PerfilPage {

  perfilForm: FormGroup;

  graduacao: any;
  posgrad: any;
  data: any;
  nRAouMat: number;
  usuario: string;
  formacao: string;
  disc: any;
  anoIngresso: number;

  submitAttempt: boolean = false;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public alertCtrl: AlertController, 
    public formBuilder: FormBuilder,
    public PerfilService: PerfilService
    ) {
    
    this.PerfilService.getDisciplinas()
      .subscribe(data => {
        this.data = data;
        this.posgrad = this.data[0].data;
        this.graduacao = this.data[1].data;
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
