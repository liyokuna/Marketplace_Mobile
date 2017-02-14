import { Component, Inject } from '@angular/core';
import { NavController, NavParams, AlertController , LoadingController , Loading, Platform } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import {SQLite} from 'ionic-native';
import {BienvenuePage} from '../bienvenue/bienvenue';
import { FormBuilder, FormGroup } from '@angular/forms';

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

	public database: SQLite;
	loading: Loading;
	public registerCredentials;
	//registerCredentials = {email: '', password: ''};
	bienvenuepage=BienvenuePage;
  constructor( private nav: NavController, private auth: AuthService, private alertCtrl: AlertController, private loadingCtrl: LoadingController, private platform: Platform, private formBuilder: FormBuilder) {
			this.platform.ready().then(()=>{
			this.database = new SQLite();
			this.database.openDatabase({name:"data.db", location:"default"}).then(()=>
				{}).catch(()=>{});
		}).catch(error => console.error("Erreur Problème d'ouverture de la base de données:",error));
		this.registerCredentials = this.formBuilder.group({
			email:'',password:''
		});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConnectionPage');
  }
  
    public check(){
		this.database.executeSql(
		"SELECT * FROM users WHERE email='this.registerCredentials.value.email' AND password='this.registerCredentials.value.password')",[]).then((data)=>{
			console.log("INSERTED"+JSON.stringify(data));
		},(error)=>{console.log("ERROR"+JSON.stringify(error.err))
		});
	}
	
	public login() {
    this.showLoading();
    if(this.registerCredentials){
        setTimeout(() => {
        this.loading.dismiss();
		this.check();	
		console.log(this.registerCredentials.value.email)
        this.nav.setRoot(this.bienvenuepage)
        });
      } else {
        this.showError("Accès refusé");
      };
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
