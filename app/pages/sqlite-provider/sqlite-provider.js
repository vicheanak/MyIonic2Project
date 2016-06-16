import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {SqliteData} from '../../providers/sqlite-data/sqlite-data';

/*
  Generated class for the SqliteProviderPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/sqlite-provider/sqlite-provider.html',
  providers: [SqliteData]
})

export class SqliteProviderPage {
  static get parameters() {
    return [[NavController], [SqliteData]];
  }

  constructor(nav, sqliteData) {
    this.nav = nav;
    this.sqliteData = sqliteData;
  }

  refresh() {
      this.sqliteData.get().then(data => {
          this.people = data;
      });
  }

  drop(){
      this.sqliteData.drop().then(data => {
          console.log(data);

      });
  }

  createTable(){
      this.sqliteData.createTable().then(data => {
          console.log(data);
      });
  }

  add(){
      this.sqliteData.add().then(data => {
          console.log(data);
      })
  }
}
