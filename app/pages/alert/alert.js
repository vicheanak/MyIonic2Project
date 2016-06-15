import {Component} from '@angular/core';
import {Alert, NavController} from 'ionic-angular';

/*
  Generated class for the AlertPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/alert/alert.html',
})
export class AlertPage {
  static get parameters() {
    return [[NavController]];
  }

  constructor(nav) {
    this.nav = nav;
  }

  basicAlert(){
      let alert = Alert.create({
          title: 'Basic Alert',
          subTitle: 'This is the basic alert',
          buttons: ['OK']
      });
      
      this.nav.present(alert);
  }

  promptAlert(){
      let prompt = Alert.create({
          title: 'Prompt Alert',
          message: 'This is the message of prompt alert',
          inputs: [{
              name: 'Name',
              placeHolder: 'Placeholder'

          }],
          buttons: [{
              text: 'Cancel',
              handler: data => {
                  console.log('Cancel', data);
              }
          },{
              text: 'Save',
              handler: data => {
                  console.log('Save', data)
              }
          }]
      })
      
      this.nav.present(prompt);
  }

  confirmationAlert(){
      let confirm = Alert.create({
          title: 'Use this lightsaber?',
          message: 'Do you agree to use this lightsaber to do good across the intergalactic galaxy?',
          buttons: [
              {
                  text: 'Disagree',
                  handler: () => {
                      console.log('Disagree clicked');
                  }
              },
              {
                  text: 'Agree',
                  handler: () => {
                      console.log('Agree clicked');
                  }
              }
          ]
      });

      this.nav.present(confirm);
  }

  radioAlert(){
      let alert = Alert.create({
          title: 'Radio Alert',
          inputs: [{
              type: 'radio',
              label: 'Blue',
              value: 'blue',
              checked: true
          },{
              type: 'radio',
              label: 'Red',
              value: 'red'
          }],
          buttons: [{
              text: 'Cancel',
              handler: data => {
                  console.log('Cancel', data);
              }
          },{
              text: 'Select',
              handler: data => {
                  console.log('Select', data);
              }
          }]
      });
      
      this.nav.present(alert);
  }

  checkboxAlert(){
      let alert = Alert.create();
      alert.setTitle('Which planets have you visited?');

      alert.addInput({
          type: 'checkbox',
          label: 'Alderaan',
          value: 'value1',
          checked: true
      });

      alert.addInput({
          type: 'checkbox',
          label: 'Bespin',
          value: 'value2'
      });

      alert.addButton('Cancel');
      alert.addButton({
          text: 'Okay',
          handler: data => {
              console.log('Checkbox data:', data);
              this.testCheckboxOpen = false;
              this.testCheckboxResult = data;
          }
      });
      this.nav.present(alert);
  }
}
