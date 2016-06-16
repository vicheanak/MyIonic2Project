import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {SqlitePage} from '../sqlite/sqlite';
import {SqliteProviderPage} from '../sqlite-provider/sqlite-provider';

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
        title: 'SQLite',
        page: SqlitePage
    },{
        title: 'SQLite Provider',
        page: SqliteProviderPage
    }];
  }

  itemTapped(event, item){
      this.nav.push(item.page);
  }
}
