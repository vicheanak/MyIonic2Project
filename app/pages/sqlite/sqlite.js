import {Component} from '@angular/core';
import {NavController, Storage, SqlStorage, Platform} from 'ionic-angular';

/*
   Generated class for the SqlitePage page.

   See http://ionicframework.com/docs/v2/components/#navigation for more info on
   Ionic pages and navigation.
   */
@Component({
    templateUrl: 'build/pages/sqlite/sqlite.html',
})
export class SqlitePage {
    static get parameters() {
        return [[NavController], [Platform]];
    }

    constructor(nav, platform) {
        this.nav = nav;
        this.platform = platform;
        this.platform.ready().then(() => {
            this.storage = new Storage(SqlStorage);
            this.storage.query('CREATE TABLE IF NOT EXISTS People (id INTEGER PRIMARY KEY AUTOINCREMENT, firstname TEXT, lastname TEXT)').then((data) => {
                console.log('Table Created', data.res);
            }, (error) => {
                console.log('Error Created', error.err);
            });
        });
    }

    createTable(){
        this.platform.ready().then(() => {
            this.storage = new Storage(SqlStorage);
            this.storage.query('CREATE TABLE IF NOT EXISTS People (id INTEGER PRIMARY KEY AUTOINCREMENT, firstname TEXT, lastname TEXT)').then((data) => {
                console.log('Table Created', data.res);
            }, (error) => {
                console.log('Error Created', error.err);
            });
        });
    }

    add() {
        this.platform.ready().then(() => {
            this.storage.query("INSERT INTO People (firstname, lastname) VALUES ('John', 'Doe')").then((data) => {
                console.log('DATA INSERTED', data.res);
            }, (error) => {
                console.log('ERROR', error.err);
            });
        });
    }

    drop(){
        this.platform.ready().then(() => {
            this.storage.query("DROP TABLE People").then((data) => {
                console.log('TABLE DROPPED', data.res);
            }, (error) => {
                console.log('ERROR', error.err);
            })
        });
    }

    refresh() {
        this.platform.ready().then(() => {
            this.storage.query("SELECT * FROM People").then((data) => {
                this.people = [];
                if(data.res.rows.length > 0) {
                    for(var i = 0; i < data.res.rows.length; i++) {
                        this.people.push({firstname: data.res.rows.item(i).firstname, lastname: data.res.rows.item(i).lastname});
                    }
                }
            }, (error) => {
                console.log('ERROR',error.err);
            });
        });
    }
}
