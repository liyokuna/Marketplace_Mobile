import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ConnectionPage } from '../pages/connection/connection';
import { EnregistrerPage } from '../pages/enregistrer/enregistrer';
import { BienvenuePage } from '../pages/bienvenue/bienvenue';
import { ParametrePage } from '../pages/parametre/parametre';
import { PanierPage } from '../pages/panier/panier';
import { DeconnexionPage } from '../pages/deconnexion/deconnexion';
import { BonPage } from '../pages/bon/bon';
import { MarchePage } from '../pages/marche/marche';
import { AuthService } from '../providers/auth-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
	ConnectionPage,
	EnregistrerPage,
	BienvenuePage,
	ParametrePage,
	PanierPage,
	DeconnexionPage,
	BonPage,
	MarchePage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
	ConnectionPage,
	EnregistrerPage,
	BienvenuePage,
	ParametrePage,
	PanierPage,
	DeconnexionPage,
	BonPage,
	MarchePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, AuthService]
})
export class AppModule {}
