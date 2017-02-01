import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import {ConnectionPage} from '../connection/connection';

import {EnregistrerPage} from '../enregistrer/enregistrer';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	connectionpage = ConnectionPage
	enregistrerpage = EnregistrerPage
  constructor(public navCtrl: NavController) {
    
  }

}
