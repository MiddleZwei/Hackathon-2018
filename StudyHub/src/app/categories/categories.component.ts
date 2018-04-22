import { Component, OnInit } from '@angular/core';
import { AddEventDialogComponent } from '../add-event-pop-up/add-event-dialog/add-event-dialog.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
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
