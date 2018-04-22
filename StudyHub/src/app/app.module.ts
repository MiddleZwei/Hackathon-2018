
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

import { AuthService } from './auth.service';
import { EventsComponent } from './events/events.component';
import { CategoriesComponent } from './categories/categories.component';
import { MatCardModule, MatDialogModule, MatButtonModule } from '@angular/material';
// import { AddEventPopUpComponent } from './add-event-pop-up/add-event-pop-up.component';
import { AddEventDialogComponent } from './add-event-pop-up/add-event-dialog/add-event-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import * as firebase from 'firebase';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EventsComponent,
    CategoriesComponent,
    // AddEventPopUpComponent,
    AddEventDialogComponent

  ],
  imports: [
    BrowserModule,
    ClarityModule,
    AppRoutingModule,
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
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }