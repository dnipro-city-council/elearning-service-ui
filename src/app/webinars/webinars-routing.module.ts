import { NgModule } from '@angular/core';
import {RouterModule, Routes}  from '@angular/router';
import {WebinarsComponent} from "./webinars.component";

const webinarsRouting:Routes = [
  {path: '', component: WebinarsComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(webinarsRouting)
  ],
  exports: [
    RouterModule
  ]
})
export class WebinarsRoutingModule { }
