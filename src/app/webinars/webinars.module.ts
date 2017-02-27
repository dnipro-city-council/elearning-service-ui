import { NgModule } from '@angular/core';
import { WebinarsRoutingModule } from './webinars-routing.module';
import {WebinarsComponent} from "./webinars.component";

@NgModule({
  imports: [
    WebinarsRoutingModule
  ],
  declarations: [
    WebinarsComponent
  ]
})

export class WebinarsModule { }
