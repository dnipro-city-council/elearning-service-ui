import {NgModule}              from '@angular/core';
import {RouterModule, Routes}  from '@angular/router';
import {TrainingsComponent} from "./trainings.component";

const trainingsRouting: Routes = [
  {path: '', component: TrainingsComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(trainingsRouting)
  ],
  exports: [
    RouterModule
  ]
})
export class TrainingsRoutingModule {}
