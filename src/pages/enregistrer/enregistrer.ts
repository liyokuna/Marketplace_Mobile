import { Component } from '@angular/core';
import { NavController, AlertController, Platform } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import {SQLite} from 'ionic-native';
import { FormBuilder, FormGroup } from '@angular/forms';

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
	public registerCredentials;
	constructor(private navCtrl: NavController, private platform: Platform, private alertCtrl: AlertController, private auth: AuthService, private formBuilder: FormBuilder) {
		this.platform.ready().then(()=>{
			this.database = new SQLite();
			this.database.openDatabase({name:"data.db", location:"default"}).then(()=>
				{}).catch(()=>{});
		}).catch(error => console.error("Erreur Problème d'ouverture de la base de données:",error));
		this.registerCredentials = this.formBuilder.group({
			prenom:'',nom:'',email:'',password:'',age:'',profession:'', type:''
		});
	}
		
	public add(){
		this.database.executeSql(
		"INSERT INTO users (prenom,nom,email,age,password,profession,type) VALUES(this.registerCredentials.value.prenom,this.registerCredentials.value.nom,this.registerCredentials.value.mail,this.registerCredentials.value.age,this.registerCredentials.value.password,this.registerCredentials.value.type)",[]).then((data)=>{
			console.log("INSERTED"+JSON.stringify(data));
		},(error)=>{console.log("Erreur"+JSON.stringify(error.err))
		});
	}
	public register(){
		if(this.registerCredentials){
			
			this.createSuccess = true;
			this.add();
			this.showPopup("Success","Votre compte a été crée avec succès");
			//this.navCtrl.push(this.bienvenuepage);
		}else{
			this.showPopup("Erreur","Il y a eu des problèmes lors de la création de votre compte");
		};
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
