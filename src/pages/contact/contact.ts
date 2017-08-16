import {Component} from '@angular/core';
import {NavController, Platform} from 'ionic-angular';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  constructor(public navCtrl: NavController, public platform: Platform, private domSanitizer: DomSanitizer) {}
  videoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/5NIFKiK7XKs');
}
