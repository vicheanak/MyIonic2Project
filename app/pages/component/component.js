import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ActionSheetPage} from '../action-sheet/action-sheet';
import {AlertPage} from '../alert/alert';
import {BadgePage} from '../badge/badge';

/*
  Generated class for the ComponentPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/component/component.html',
})
export class ComponentPage {
  static get parameters() {
    return [[NavController]];
  }

  constructor(nav) {
    this.nav = nav;
    this.items = [{
        title: 'Action Sheet',
        page: ActionSheetPage
    },{
        title: 'Alerts',
        page: AlertPage
    },{
        title: 'Badges',
        page: BadgePage
    }];
  }

  itemTapped(event, item){
      this.nav.push(item.page);
  }
}
