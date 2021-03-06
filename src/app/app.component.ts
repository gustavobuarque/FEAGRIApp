import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { SobrePage } from './../pages/sobre/sobre';
import { PerfilPage } from './../pages/perfil/perfil';
import { RestaurantePage } from './../pages/restaurante/restaurante';
import { CircularInternoPage } from './../pages/circular-interno/circular-interno';
import { InfoUtilPage } from './../pages/info-util/info-util';
import { ProtocoloEletronicoPage } from './../pages/protocolo-eletronico/protocolo-eletronico';
import { ContatosPage } from './../pages/contatos/contatos';
import { GradeHorariaPage } from './../pages/grade-horaria/grade-horaria';

import { OneSignal } from '@ionic-native/onesignal'; // Comentar isso para rodar local

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = GradeHorariaPage;

  pages: Array<{icon: string, title: string, component: any, openLink: boolean}>;

  msgOnesignal: any;

  iosSettings:any = {};

  // Comentar oneSignal: OneSignal para rodar localmente

  constructor(
    public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen,
    public alertCtrl: AlertController,
    private oneSignal: OneSignal    
    ) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { icon: "clock", title: 'Grade Horária', component: GradeHorariaPage, openLink: false },
      { icon: "mail", title: 'Webmail', component: "https://webmail.feagri.unicamp.br/", openLink: true },
      { icon: "contacts", title: 'Contatos', component: ContatosPage, openLink: false },
      { icon: "create",  title: 'Protocolo Eletrônico', component: ProtocoloEletronicoPage, openLink: false },
      { icon: "link", title: 'Informações Úteis', component: InfoUtilPage, openLink: false },
      { icon: "bus", title: 'Circular Interno', component: CircularInternoPage, openLink: false },
      { icon: "restaurant", title: 'Restaurante/Cardápio', component: RestaurantePage, openLink: false },
      { icon: "person", title: 'Perfil', component: PerfilPage, openLink: false },
      { icon: "information", title: 'Sobre', component: SobrePage, openLink: false }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      setTimeout(() => {
        this.splashScreen.hide();
      }, 100);

      // Comentar daqui

      // Enable to debug issues.
      // window["plugins"].OneSignal.setLogLevel({logLevel: 4, visualLevel: 4});
      this.iosSettings["kOSSettingsKeyAutoPrompt"] = true;
      this.iosSettings["kOSSettingsKeyInAppLaunchURL"] = false;


      this.oneSignal.startInit("f6feef19-57b8-45c3-b2ee-87c4f0b77029", "540178667802");
      this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);
      this.oneSignal.iOSSettings(this.iosSettings);
      this.oneSignal.handleNotificationReceived().subscribe((jsonData) => {
        // do something when notification is received
      });

      this.oneSignal.handleNotificationOpened().subscribe(jsonData => {
        // do something when a notification is opened
        // Caso pare de funcionar provavelmente mudou objeto jsonData, nesse caso é interessante habilitar 
        // a linha abaixo para ver como objeto está sendo recebido
        // this.showAlert("modal", JSON.stringfy(jsonData));
        this.showAlert(jsonData.notification.payload.title, jsonData.notification.payload.body);
      });

      this.oneSignal.endInit();

      // Até aqui para rodar localmente
    
    });
  }

  showAlert(t:any, b:any) {
    let alert = this.alertCtrl.create({
      title: t,
      subTitle: b,
      buttons: ['OK']
    });
    alert.present();
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    if(page.openLink == false){
      this.nav.setRoot(page.component);
    } else {
      window.open(page.component, '_blank')
    }
  } 

}
