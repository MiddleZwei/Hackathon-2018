import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  // users : User[] = [];

  constructor(private db : AngularFireDatabase){}

  ngOnInit(){
    // var x = this.db.list("User");
    // x.snapshotChanges().subscribe(item => {
    //   item.forEach(element => {
    //     var y = element.payload.toJSON();
    //     y["$key"] = element.key;
    //     this.users.push(y as User);
    //     console.log(y);
    //   })
    // });
  }

  // ngOnInit() {
    // firebase.initializeApp({
    //   apiKey: "AIzaSyCUOYNaJM3lG9CzvzYXQCfL3ZrZ_oMTqNc",
    //   authDomain: "studyhub-d1766.firebaseapp.com",
    //   databaseURL: "https://studyhub-d1766.firebaseio.com",
    //   projectId: "studyhub-d1766",
    //   storageBucket: "studyhub-d1766.appspot.com",
    //   messagingSenderId: "627276480992"
    // });
  // }

  
}

// interface User {
//   email: string;
//   password: string;
// }
