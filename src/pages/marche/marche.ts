import { Component } from '@angular/core';
import { NavController, NavParams, ToastController  } from 'ionic-angular';

/*
  Generated class for the Marche page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-marche',
  templateUrl: 'marche.html'
})
export class MarchePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {}

 presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Le bon a été ajouté dans votre panier',
      duration: 3000
    });
    toast.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MarchePage');
  }

}
