import { ContatoInfoPage } from './../pages/contato-info/contato-info';
import { SobrePage } from './../pages/sobre/sobre';
import { RestaurantePage } from './../pages/restaurante/restaurante';
import { ProtocoloEletronicoPage } from './../pages/protocolo-eletronico/protocolo-eletronico';
import { PerfilPage } from './../pages/perfil/perfil';
import { InfoUtilPage } from './../pages/info-util/info-util';
import { GradeHorariaPage } from './../pages/grade-horaria/grade-horaria';
import { ContatosPage } from './../pages/contatos/contatos';
import { CircularInternoPage } from './../pages/circular-interno/circular-interno';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { InAppBrowser } from '@ionic-native/in-app-browser';


@NgModule({
  declarations: [
    MyApp,
    CircularInternoPage,
    ContatosPage,
    GradeHorariaPage,
    InfoUtilPage,
    PerfilPage,
    ProtocoloEletronicoPage,
    RestaurantePage,
    SobrePage,
    ContatoInfoPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CircularInternoPage,
    ContatosPage,
    GradeHorariaPage,
    InfoUtilPage,
    PerfilPage,
    ProtocoloEletronicoPage,
    RestaurantePage,
    SobrePage,
    ContatoInfoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    InAppBrowser,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
