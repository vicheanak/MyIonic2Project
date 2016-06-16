import {Injectable} from '@angular/core';
import {Storage, SqlStorage} from 'ionic-angular';

/*
   Generated class for the SqliteData provider.

   See https://angular.io/docs/ts/latest/guide/dependency-injection.html
   for more info on providers and Angular 2 DI.
   */
@Injectable()
export class SqliteData {
    static get parameters(){
        return []
    }  

    constructor() {
        this.storage = new Storage(SqlStorage);
        this.data = null;
    }

    get(){
        return new Promise(resolve => {
            this.storage.query("SELECT * FROM People").then((data) => {
                this.people = [];
                if(data.res.rows.length > 0) {
                    for(var i = 0; i < data.res.rows.length; i++) {
                        this.people.push({firstname: data.res.rows.item(i).firstname, lastname: data.res.rows.item(i).lastname});
                    }
                }
                resolve(this.people);
            }, (error) => {
                console.log('ERROR',error.err);
            });
        });
    }

    createTable(){
        return new Promise(resolve => {
            this.storage = new Storage(SqlStorage);
            this.storage.query('CREATE TABLE IF NOT EXISTS People (id INTEGER PRIMARY KEY AUTOINCREMENT, firstname TEXT, lastname TEXT)').then((data) => {
                resolve(data);
            }, (error) => {
                resolve(error.err);
            });
        });
    }

    add() {
        return new Promise(resolve => {
            this.storage.query("INSERT INTO People (firstname, lastname) VALUES ('John', 'Doe')").then((data) => {
                resolve(data);
            }, (error) => {
                resolve(error.err);
            });
        });
    }

    drop(){
        return new Promise(resolve => {
            this.storage.query("DROP TABLE People").then((data) => {
                resolve(data);
            }, (error) => {
                resolve(error.err);
            });
        });
    }
}

