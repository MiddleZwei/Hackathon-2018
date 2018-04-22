
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ClarityModule } from "@clr/angular";
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';
// import { DatePipe } from '@angular/common';
// import { FilterCategoriesPipe } from '../filter-categories.pipe';

import { AuthService } from './auth.service';
import { CategoriesComponent } from './categories/categories.component';


import {MatButtonModule, MatCheckboxModule, MatToolbarModule, MatSidenavModule} from '@angular/material';
import { MatCardModule, MatDialogModule} from '@angular/material';
// import { AddEventPopUpComponent } from './add-event-pop-up/add-event-pop-up.component';
import { AddEventDialogComponent } from './add-event-pop-up/add-event-dialog/add-event-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilterCategoriesPipe } from './filter-categories.pipe';
import { FilterSearchPipe } from './filter-search.pipe';

// import * as firebase from 'firebase';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    // EventsComponent,
    CategoriesComponent,
    // AddEventPopUpComponent,
    AddEventDialogComponent,
    FilterCategoriesPipe,
    FilterSearchPipe

  ],
  imports: [
    BrowserModule,
    ClarityModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    MatDialogModule,
    MatCardModule,
    MatButtonModule,
    BrowserAnimationsModule
  ],
  entryComponents: [
    AddEventDialogComponent
  ],
  providers: [AuthService, FilterCategoriesPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }