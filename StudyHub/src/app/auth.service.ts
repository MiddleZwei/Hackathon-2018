import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Observable } from 'rxjs/Observable';

import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { FirebaseDatabase } from '@firebase/database-types';

// export class User{
//   email: string;
//   password: string;
// }


interface User {
  email: string;
  password: string;
}

@Injectable()
export class AuthService {
  user: Observable<firebase.User>;
  _db:AngularFireDatabase;
  // users:  Observable<any[]>;

  constructor(private firebaseAuth: AngularFireAuth, private db : AngularFireDatabase) {
    this.user = firebaseAuth.authState;
    // let users = this.db.list<User>('User').valueChanges().subscribe(console.log);
    this._db = db;
  }

  signup(email: string, password: string) {
    this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Success!', value);
        this.addUserToDB(email, password);
      })
      .catch(err => {
        console.log('Something went wrong:',err.message);
      });    
      // firebase.database().ref('users/' + this.user.).set
      
  }

  addUserToDB(email: string, password: string){
    // let userCollection = this._db.list<User>('Users');
    // userCollection.add({email, password});
    const dbList = this._db.list('User');
    dbList.push({email: email, password: password});
    // const listObservable = this._db.snaphotChanges();
    // listObservable.subscribe();
  }

  login(email: string, password: string) {
    this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Nice, it worked!');
      })
      .catch(err => {
        console.log('Something went wrong:',err.message);
      });
  }

  logout() {
    this.firebaseAuth
      .auth
      .signOut();
  }
}

