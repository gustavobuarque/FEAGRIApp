import { PerfilService } from './../../providers/perfil.service';
import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OneSignal } from '@ionic-native/onesignal';

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

  usuarioAtual: string;
  matriculaAtual: string;
  formacaoAtual: string;
  disciplinaAtual: string[];
  anoAtual: string;

  submitAttempt: boolean = false;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public alertCtrl: AlertController, 
    public formBuilder: FormBuilder,
    public PerfilService: PerfilService,
    private oneSignal: OneSignal,
    public loadingCtrl: LoadingController,
    ) {
    
    this.oneSignal.getTags()
      .then((res) => {
        this.matriculaAtual = res.matricula; 
        this.usuarioAtual = res.usuario; 
        this.formacaoAtual = res.formacao; 
        this.disciplinaAtual = res.disciplinas.split(","); 
        this.anoAtual = res.ano; 
      });

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
      
      // Limpa os dados existentes no oneSignal
      this.oneSignal.deleteTags(["usuario","matricula","formacao","disciplinas","ano"]);    
      
      if(this.usuario == "aluno"){
        //console.log(this.usuario, this.nRAouMat, this.formacao, this.disc, this.anoIngresso);
        this.oneSignal.sendTags({
          "usuario":this.usuario, 
          "matricula":this.nRAouMat,
          "formacao":this.formacao,
          "disciplinas":this.disc.toString(),
          "ano":this.anoIngresso
        });
      } else {
        //console.log(this.usuario, this.nRAouMat);
         this.oneSignal.sendTags({
          "usuario":this.usuario, 
          "matricula":this.nRAouMat
        });
      }

      this.presentLoadingText();
      
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

  presentLoadingText() {
    let loading = this.loadingCtrl.create({
      //spinner: 'hide',
      content: 'Enviando e salvando dados...'
    });

    loading.present();

    setTimeout(() => {
      loading.dismiss();
    }, 2000);

    setTimeout(() => {
      this.navCtrl.setRoot(PerfilPage);
    }, 2000);

  }
  

}
