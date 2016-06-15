import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {SqlitePage} from '../sqlite/sqlite';

/*
  Generated class for the NativePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/native/native.html',
})
export class NativePage {
  static get parameters() {
    return [[NavController]];
  }

  constructor(nav) {
    this.nav = nav;
    this.items = [{
        title: 'SQLLite',
        page: SqlitePage
    }];
  }

  itemTapped(event, item){
      this.nav.push(item.page);
  }
}
