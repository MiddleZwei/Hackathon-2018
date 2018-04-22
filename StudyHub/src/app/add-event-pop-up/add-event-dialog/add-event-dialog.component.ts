import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material';
// import { DatePipe } from '@angular/common'
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-add-event-dialog',
  templateUrl: './add-event-dialog.component.html',
  styleUrls: ['./add-event-dialog.component.css']
})
export class AddEventDialogComponent implements OnInit {

  constructor(private db: AngularFireDatabase, public thisDialogRef: MatDialogRef<AddEventDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: string) { }

  ngOnInit() {
  }

  name: string;
  // date_time: Date;
  programming: string;
  maths: string;
  physics: string;
  description: string;

  onCloseConfirm(){
    this.thisDialogRef.close('Confirm');
    // console.log(this.programming);
    // send data to the database
    const dbList = this.db.list('Event');
    dbList.push({name: !this.name ? "novalue" : this.name, 
                // date_time: this.date_time.getDate.name,
                  programming: !this.programming ? "false" : "true",
                  maths: !this.maths ? "false" : "true",
                  physics: !this.physics ? "false" : "true",
                  description: !this.description ? "novalue" : this.description
                });
  }

  onCloseCancel(){
    this.thisDialogRef.close('Cancel');
  }

}
