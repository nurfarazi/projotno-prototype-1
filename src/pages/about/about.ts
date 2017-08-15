import {Component} from '@angular/core';
import {NavController, Platform} from 'ionic-angular';
import {InAppBrowser} from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})

export class AboutPage {

  constructor(public navCtrl: NavController, public platform: Platform, private iab: InAppBrowser) {

  }

  onClick1() {
    this.platform.ready().then(() => {
      let browser = this.iab.create('https://www.onlineexambuilder.com/rog-nirnnyyh-smsyaa-1/exam-170286', '_self', {location: 'no'});
      browser.executeScript({});
    });
  }
  onClick2() {
    this.platform.ready().then(() => {
      let browser = this.iab.create('https://www.onlineexambuilder.com/rog-nirnnyyh-smsyaa-2/exam-170290', '_self', {location: 'no'});
      browser.executeScript({});
    });
  }onClick3() {
    this.platform.ready().then(() => {
      let browser = this.iab.create('https://www.onlineexambuilder.com/rog-nirnnyyh-smsyaa-3/exam-170291', '_self', {location: 'no'});
      browser.executeScript({});
    });
  }

}
