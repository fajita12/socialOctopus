import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SettingsPage } from '../settings/settings';
import { HomePage } from '../home/home';
import { TestingPage } from '../testing/testing';

/**
 * Generated class for the UserProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-profile',
  templateUrl: 'user-profile.html',
})
export class UserProfilePage {

  name = "Jon Snow";
  quote = "Life is like a box of chocolates";
  params = {test : false, code: ""};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //console.log(navParams.get('test'));
    if (navParams.get('test')== true){
      this.params = {test: true, code: navParams.get('code')};
      this.navCtrl.push(TestingPage, this.params);
    }
  }

  ionViewDidLoad() {
   // console.log('ionViewDidLoad UserProfilePage');
  }

  goToSettingsPage(){
    this.navCtrl.push(SettingsPage);
  }
  goToHomePage(){
    this.navCtrl.push(HomePage);
  }

}
