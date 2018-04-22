import { Component, OnInit, ViewChild } from '@angular/core';
// import { ModalService } from './sc-modal/modal.service';
import { MatDialog } from '@angular/material';
import { AddEventDialogComponent } from '../add-event-pop-up/add-event-dialog/add-event-dialog.component';
// import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
// import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

    // users:FirebaseListObservable<any>;
    

  dialogResult = "";
    
  constructor(public dialog: MatDialog) { 
    // this.users = db2.list('User');
  }
  ngOnInit() {
  }

  // iDidNotHitHer() { 
  //  console.log("Lyoha marry me, please");
  // }
  openAddEventDialog() {
    console.log("opened");
    let dialogRef = this.dialog.open(AddEventDialogComponent, {
      width: '600px',
      data: 'This text is passed into the dialog'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog closed: ${result}`);
      this.dialogResult = result;
    })
  }
}

