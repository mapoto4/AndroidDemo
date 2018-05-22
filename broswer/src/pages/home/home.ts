import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ThemeableBrowser, ThemeableBrowserOptions, ThemeableBrowserObject } from '@ionic-native/themeable-browser';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private themeableBrowser: ThemeableBrowser) {

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad home');
  }
	
  
	test(){
	
	let options = {
		statusbar: {
            color: '#f8285c'
        },
        toolbar: {
            height: 44,
            color: '#f8285c'
        },
        title: {
            color: '#ffffffff',
            showPageTitle: true
        },
        backButton: {
            image: 'back',
            imagePressed: 'back_pressed',
            align: 'left',
            event: 'backPressed'
        },
        backButtonCanClose: true
	};
	const browser: ThemeableBrowserObject = this.themeableBrowser.create('https://www.baidu.com/', '_blank', options);
			
  }
  
}
