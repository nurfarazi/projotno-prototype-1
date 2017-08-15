import {Component} from '@angular/core';
import {NavController, Platform} from 'ionic-angular';
import {InAppBrowser} from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController, public platform: Platform, private iab: InAppBrowser) {}

  openNow() {
    this.platform.ready().then(() => {
      let browser = this.iab.create('https://www.youtube.com/watch?v=5NIFKiK7XKs', '_self',
        {
          location: 'no',
          mediaPlaybackRequiresUserAction: "no"
        }
      );
      browser.executeScript({});
    });
  }

}
