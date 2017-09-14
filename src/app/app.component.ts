import {Component, Input} from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';
import {AngularFireAuth} from "angularfire2/auth";

import { OnInit } from "@angular/core";

@Component({
  selector: 'ck-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  @Input()
  skillsList: FirebaseListObservable<any[]>;

  constructor(db: AngularFireDatabase, public afAuth: AngularFireAuth) {
    this.skillsList = db.list('/skillsList');
  }

  ngOnInit(){
    this.afAuth.auth.signInAnonymously();
  }


}
