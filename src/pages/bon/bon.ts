import { Component } from '@angular/core';
import { NavController, NavParams,ToastController  } from 'ionic-angular';

/*
  Generated class for the Bon page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-bon',
  templateUrl: 'bon.html'
})
export class BonPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {}
 
 showToast(position: string) {
    let toast = this.toastCtrl.create({
      message: 'Le bon a été ajouté dans votre panier',
      duration: 3000,
      position: position
    });
    toast.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BonPage');
  }

}
