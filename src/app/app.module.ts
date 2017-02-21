import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import 'hammerjs';
import {FlexLayoutModule} from "@angular/flex-layout";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TrainingsComponent } from './trainings/trainings.component';
import { WebinarsComponent } from './webinars/webinars.component';
import { ResourcesComponent } from './resources/resources.component';
import { QuizzesComponent } from './quizzes/quizzes.component';
import { InternalDocumentsComponent } from './internal-documents/internal-documents.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {AppRoutingModule} from "./app-routing.module";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TrainingsComponent,
    WebinarsComponent,
    ResourcesComponent,
    QuizzesComponent,
    InternalDocumentsComponent,
    PageNotFoundComponent
  ],
  imports: [
    AppRoutingModule,
    MaterialModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
