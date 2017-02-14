import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';
import { ParametrePage } from '../parametre/parametre';
import { PanierPage } from '../panier/panier';
import { BonPage } from '../bon/bon';
import { MarchePage } from '../marche/marche';
/*
  Generated class for the Bienvenue page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-bienvenue',
  templateUrl: 'bienvenue.html'
})
export class BienvenuePage {

  tab1Root: any = BonPage;
  tab2Root: any = MarchePage;
  tab3Root: any = PanierPage;
  tab4Root: any = ParametrePage;
  tab5Root: any = HomePage;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {}
	
  ionViewDidLoad() {
    console.log('ionViewDidLoad BienvenuePage');
  }

}
