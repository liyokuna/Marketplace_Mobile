import { Injectable } from '@angular/core';
import { SQLite } from 'ionic-native';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { NavController, AlertController, Platform } from 'ionic-angular';

//import {BienvenuePage} from '../bienvenue/bienvenue';

/*
  Generated class for the AuthService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
export class User {
  name: string;
  email: string;
  database: SQLite;
 // bienvenuepage = BienvenuePage;
  constructor(name: string, email: string, private platform: Platform) {
    this.name = name;
    this.email = email;
	this.platform.ready().then(()=>{
	this.database = new SQLite();
	this.database.openDatabase({name:"data.db", location:"default"}).then(()=>{}).catch(()=>{});
	}).catch(error => console.error("Erreur Problème d'ouverture de la base de données:",error));
  }
}

@Injectable()
export class AuthService {

	currentUser: User;
	database: SQLite;
	constructor(public http: Http) {
		console.log('Hello AuthService Provider');
  }
	
  public login(credentials) {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Veuillez saisir vos identifiants");
    } else {
      return Observable.create(observer => {
        //this.check();
		console.log(credentials.email);
		//this.navCtrl.push(bienvenuepage);
        observer.complete();
      });
    }
  }
 
  public register(credentials) {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Veuillez renseigner les informations demandées");
    } else {
      return Observable.create(observer => {
        observer.next(true);
        observer.complete();
      });
    }
  }
 
  public getUserInfo() : User {
    return this.currentUser;
  }
 
  public logout() {
    return Observable.create(observer => {
      this.currentUser = null;
      observer.next(true);
      observer.complete();
    });
  }
}
