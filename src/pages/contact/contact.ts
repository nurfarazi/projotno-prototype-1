import {Component} from '@angular/core';
import {NavController, Platform} from 'ionic-angular';
import {InAppBrowser} from '@ionic-native/in-app-browser';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  // videoUrl: SafeResourceUrl;
  constructor(public navCtrl: NavController, public platform: Platform, private domSanitizer: DomSanitizer) {

  }
  videoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/5NIFKiK7XKs');
}
