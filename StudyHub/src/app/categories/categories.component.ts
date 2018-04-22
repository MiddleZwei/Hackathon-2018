import { Component, OnInit, ViewChild, Input } from '@angular/core';
// import { ModalService } from './sc-modal/modal.service';
import { MatDialog } from '@angular/material';
import { AddEventDialogComponent } from '../add-event-pop-up/add-event-dialog/add-event-dialog.component';
// import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireObject } from 'angularfire2/database';
import { AngularFireDatabase, AngularFireList,  } from 'angularfire2/database';
import { element } from 'protractor';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FilterCategoriesPipe } from '../filter-categories.pipe';
import { FilterSearchPipe } from '../filter-search.pipe';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  dialogResult = "";
  categories : Category[] = []
  events : Event[] = []
  selectedCategory : string = "";
  querySearch : string = "";

  // categories: Array<Category>;
  // categories: FirebaseListObservable<any[]>;
  // item: AngularFireObject<Category>;
    
  constructor(public dialog: MatDialog, private fc: FilterCategoriesPipe, private router: Router, private db: AngularFireDatabase, public authService: AuthService) { 
    // this.users = db2.list('User');
  }
  ngOnInit() {
    var x = this.db.list('Category');
    var x2 = this.db.list('Event');
    x.snapshotChanges().subscribe(item => {
      item.forEach(element => {
        var y = element.payload.toJSON();
        y["$key"] = element.key;
        this.categories.push(y.tag);
        console.log(y);
        
      })
    });
    x2.snapshotChanges().subscribe(item => {
      item.forEach(element => {
        var y2 = element.payload.toJSON();
        y2["$key"] = element.key;
        this.events.push(y2);
        console.log(y2);
        
      })
    });
  }

  showMyEvents(cat){
    // this.fc.transform([cat], null);
    this.selectedCategory = cat;
  }

  // onSubmit(search){
  //   this.selectedCategory = search;
  // }

  subscribe(cat){
    // this.firebase
    // this.categories.forEach(element => {
    //   console.log(element)
    // })
    console.log(cat)
    console.log(this.categories)

    // this.categories.forEach(element => {
    //   if (element = cat) {
    //     console.log(element["$key"])
    //   }
    // })
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['/login']);  
  }

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
interface Category {
  tag: string;
}
interface Event {
  name: string;
  date_time: string;
  programming: string;
  maths: string;
  physics: string;
  description: string;
}




