import {NgModule}              from '@angular/core';
import {RouterModule, Routes}  from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ResourcesComponent} from "./resources/resources.component";
import {InternalDocumentsComponent} from "./internal-documents/internal-documents.component";
import {QuizzesComponent} from "./quizzes/quizzes.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";

const appRoutes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'trainings', loadChildren: './trainings/trainings.module#TrainingsModule'},
  {path: 'webinars', loadChildren: './webinars/webinars.module#WebinarsModule'},
  {path: 'resources', component: ResourcesComponent},
  {path: 'quizzes', component: QuizzesComponent},
  {path: 'internal-documents', component: InternalDocumentsComponent},
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
export class AppRoutingModule {
}
