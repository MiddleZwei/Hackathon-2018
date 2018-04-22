
import { Component, OnInit, ViewChild } from '@angular/core';
// import { ModalService } from './sc-modal/modal.service';
import { MatDialog } from '@angular/material';
import { AddEventDialogComponent } from '../add-event-pop-up/add-event-dialog/add-event-dialog.component';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  dialogResult = "";
    
  constructor(public dialog: MatDialog) { }

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
