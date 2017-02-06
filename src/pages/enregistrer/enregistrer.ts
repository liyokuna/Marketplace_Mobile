import { Component } from '@angular/core';
import { NavController, AlertController, Platform } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import {SQLite} from 'ionic-native';

/*
  Generated class for the Enregistrer page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-enregistrer',
  templateUrl: 'enregistrer.html'
})
export class EnregistrerPage {

	public database: SQLite;
	createSuccess = false;
	registerCredentials = {nom:'',prenom:'',mail:'',password:'',age:'',profession:'', type:''};
	constructor(private navCtrl: NavController, private platform: Platform, private alertCtrl: AlertController, private auth: AuthService) {
		this.platform.ready().then(()=>{
			this.database = new SQLite();
			this.database.openDatabase({name:"data.db", location:"default"}).then(()=>
				{this.refresh();
				}, (error)=>{
					console.log("ERROR:",error);
				});
		});
	}
	public add(){
		this.database.executeSql(
		"INSERT INTO users (prenom,nom,email,age,password,profession,type) VALUES(this.registerCredentials.prenom,this.registerCredentials.nom,this.registerCredentials.mail,this.registerCredentials.age,this.registerCredentials.password,this.registerCredentials.type)",[]).then((data)=>{
			console.log("INSERTED"+JSON.stringify(data));
		},(error)=>{console.log("ERROR"+JSON.stringify(error.err))
		});
	}
	public register(){
		this.auth.register(this.registerCredentials).susbscribe(success => {
			if(success){
				this.createSuccess = true;
				this.add();
				this.showPopup("Success","Votre compte a été crée avec succès");
			}else{
				this.showPopup("Erreur","Il y a eu des problèmes lors de la création de votre compte");
			}
		},
		error=>{
			this.showPopup("Erreur",error);
		});
	}
	
	showPopup(title,text){
		let alert = this.alertCtrl.create({
			title:title,
			subTitle:text,
			buttons:[{
				text:'OK',
				handler: data=>{
					if(this.createSuccess){
						this.navCtrl.popToRoot();
					}
				}
			}
			]
		});
		alert.present();
	}
}
