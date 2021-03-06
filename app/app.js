import {Component, ViewChild} from '@angular/core';
import {ionicBootstrap, Platform, MenuController} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {ComponentPage} from './pages/component/component';
import {NativePage} from './pages/native/native';


@Component({
    templateUrl: 'build/app.html',
    queries: {
        nav: new ViewChild('content')
    }
})

class MyApp {
    static get parameters() {
        return [[Platform], [MenuController]];
    }

    constructor(platform, menu) {
        this.platform = platform;
        this.menu = menu;
        this.initializeApp();

        // set our app's pages
        this.pages = [
            { title: 'Component', component: ComponentPage },
            { title: 'Native', component: NativePage }
        ];

        // make HelloIonicPage the root (or first) page
        this.rootPage = ComponentPage;
    }

    initializeApp() {
        this.platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            StatusBar.styleDefault();
        });
    }

    openPage(page) {
        // close the menu when clicking a link from the menu
        this.menu.close();
        // navigate to the new page if it is not the current page
        this.nav.setRoot(page.component);
    }
}

ionicBootstrap(MyApp);
