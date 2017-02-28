import {NgModule}              from '@angular/core';
import {RouterModule, Routes}  from '@angular/router';
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";

const appRoutes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', loadChildren: './home/home.module#HomeModule'},
  {path: 'trainings', loadChildren: './trainings/trainings.module#TrainingsModule'},
  {path: 'webinars', loadChildren: './webinars/webinars.module#WebinarsModule'},
  {path: 'resources', loadChildren: './resources/resources.module#ResourcesModule'},
  {path: 'quizzes', loadChildren: './quizzes/quizzes.module#QuizzesModule'},
  {path: 'internal-documents', loadChildren: './internal-documents/internal-documents.module#InternalDocumentsModule'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
