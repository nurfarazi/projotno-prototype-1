import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { AskPage } from '../ask/ask';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) {
  }

  onClickrogNirnoy(){
    this.navCtrl.push(AboutPage);
  }
  onClickVideo(){
    this.navCtrl.push(ContactPage);
  }
  onClickAsk(){
    this.navCtrl.push(AskPage);
  }
}
