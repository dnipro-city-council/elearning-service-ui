import {NgModule}              from '@angular/core';
import {RouterModule, Routes}  from '@angular/router';
import {QuizzesComponent} from "./quizzes.component";

const quizzesRouting: Routes = [
  {path: '', component: QuizzesComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(quizzesRouting)
  ],
  exports: [
    RouterModule
  ]
})
export class QuizzesRoutingModule {}
