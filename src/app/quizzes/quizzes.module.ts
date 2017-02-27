import { NgModule } from '@angular/core';
import { QuizzesComponent } from './quizzes.component';
import { QuizzesRoutingModule } from './quizzes-routing.module';

@NgModule({
  imports: [
    QuizzesRoutingModule
  ],
  declarations: [
    QuizzesComponent
  ]
})
export class QuizzesModule { }
