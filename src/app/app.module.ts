import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { FilmDetailsComponent } from './film-details/film-details.component';
import { FilmFormComponent } from './film-details/film-form/film-form.component'
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    FilmDetailsComponent,
    FilmFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
