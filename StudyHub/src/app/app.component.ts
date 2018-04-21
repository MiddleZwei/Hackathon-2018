import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyCUOYNaJM3lG9CzvzYXQCfL3ZrZ_oMTqNc",
      authDomain: "studyhub-d1766.firebaseapp.com",
      databaseURL: "https://studyhub-d1766.firebaseio.com",
      projectId: "studyhub-d1766",
      storageBucket: "studyhub-d1766.appspot.com",
      messagingSenderId: "627276480992"
    });
  }
}
