import {NgModule}              from '@angular/core';
import {RouterModule, Routes}  from '@angular/router';
import {ResourcesComponent} from "./resources.component";

const resourcesRouting: Routes = [
  {path: '', component: ResourcesComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(resourcesRouting)
  ],
  exports: [
    RouterModule
  ]
})
export class ResourcesRoutingModule {}
