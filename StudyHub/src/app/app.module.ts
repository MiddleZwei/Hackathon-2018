
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ClarityModule } from "@clr/angular";
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { EventsComponent } from './events/events.component';
import { CategoriesComponent } from './categories/categories.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EventsComponent,
    CategoriesComponent
  
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }