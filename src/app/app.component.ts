import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
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

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = GradeHorariaPage;

  pages: Array<{icon: string, title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { icon: "clock", title: 'Grade Horária', component: GradeHorariaPage },
      { icon: "mail", title: 'Webmail', component: GradeHorariaPage },
      { icon: "contacts", title: 'Contatos', component: ContatosPage },
      { icon: "create",  title: 'Protocolo Eletrônico', component: ProtocoloEletronicoPage },
      { icon: "link", title: 'Informações Úteis', component: InfoUtilPage },
      { icon: "bus", title: 'Circular Interno', component: CircularInternoPage },
      { icon: "restaurant", title: 'Restaurante/Cardápio', component: RestaurantePage },
      { icon: "person", title: 'Perfil', component: PerfilPage },
      { icon: "information", title: 'Sobre', component: SobrePage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
