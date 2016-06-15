import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ActionSheetPage} from '../action-sheet/action-sheet';

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
        id: 'action_sheet'
    },{
        title: 'Alerts',
        id: 'alert'
    }];
  }

  itemTapped(event, item){
      this.nav.push(ActionSheetPage);
  }
}
