import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Camera} from 'ionic-native';

/*
  Generated class for the CameraDrawPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/camera-draw/camera-draw.html',
})
export class CameraDrawPage {
  static get parameters() {
    return [[NavController]];
  }

  constructor(nav) {
    this.nav = nav;
  }

  takePhoto(){
      var options = {
          destinationType: 0,
          sourceType: 1,
          encodingType: 0,
          quality:100,
          allowEdit: false,
          saveToPhotoAlbum: false
      };
      Camera.getPicture(options).then(data => {
          this.image = "data:image/jpeg;base64," + data;
      });
  }

}
