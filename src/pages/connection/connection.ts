import { Component, Inject } from '@angular/core';
import { NavController, NavParams, AlertController , LoadingController , Loading } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';

/*
  Generated class for the Connection page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-connection',
  templateUrl: 'connection.html',
  providers: [AuthService]
})
export class ConnectionPage {

	loading: Loading;
	registerCredentials = {mail: '', password: ''};
	
  constructor( private nav: NavController, private auth: AuthService, private alertCtrl: AlertController, private loadingCtrl: LoadingController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConnectionPage');
  }
  
	public login() {
    this.showLoading()
    this.auth.login(this.registerCredentials).subscribe(allowed => {
      if (allowed) {
        setTimeout(() => {
        this.loading.dismiss();
        //this.nav.setRoot(HomePage)
        });
      } else {
        this.showError("Accès refusé");
      }
    },
    error => {
      this.showError(error);
    });
  }
  
  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Veuillez patienter...'
    });
    this.loading.present();
  }

  showError(text) {
    setTimeout(() => {
      this.loading.dismiss();
    });
	
	let alert = this.alertCtrl.create({
      title: 'Echoué',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present(prompt);
  }
}
