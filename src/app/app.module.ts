import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import 'hammerjs';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CovalentExpansionPanelModule } from '@covalent/core';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { appNavigation, navigationConfig } from './constants/navigation.constant';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    CovalentExpansionPanelModule.forRoot(),
    AppRoutingModule,
    MaterialModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    FlexLayoutModule
  ],
  providers: [
    { provide: appNavigation, useValue: navigationConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
