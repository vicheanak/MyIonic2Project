import {Component} from '@angular/core';
import {ActionSheet, NavController} from 'ionic-angular';

/*
  Generated class for the ActionSheetPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/action-sheet/action-sheet.html',
})
export class ActionSheetPage {
    static get parameters() {
        return [[NavController]];
    }

    constructor(nav) {
        this.nav = nav;
    }

    show() {
        let actionSheet = ActionSheet.create({
            title: 'Action Sheet',
            buttons: [
                {
                    text: 'Delete',
                    role: 'destructive',
                    icon: 'trash',
                    handler: () => {
                        console.log('Delete clicked');
                    }
                },
                {
                    text: 'Share',
                    icon: 'share',
                    handler: () => {
                        console.log('Share clicked');
                    }
                },
                {
                    text: 'Play',
                    icon: 'arrow-dropright-circle',
                    handler: () => {
                        console.log('Play clicked');
                    }
                },
                {
                    text: 'Favorite',
                    icon: 'heart-outline',
                    handler: () => {
                        console.log('Favorite clicked');
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel', // will always sort to be on the bottom
                    icon: 'close',
                    handler: () => {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });

        this.nav.present(actionSheet);
    }
}
