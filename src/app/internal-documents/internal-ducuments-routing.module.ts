import {NgModule}              from '@angular/core';
import {RouterModule, Routes}  from '@angular/router';
import {InternalDocumentsComponent} from "./internal-documents.component";

const InternalDocumentsRouting: Routes = [
  {path: '', component: InternalDocumentsComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(InternalDocumentsRouting)
  ],
  exports: [
    RouterModule
  ]
})
export class InternalDocumentsRoutingModule {}
