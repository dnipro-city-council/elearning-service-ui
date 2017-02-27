import { NgModule } from "@angular/core";
import { ResourcesRoutingModule } from "./resources-routing.module";
import { ResourcesComponent } from "./resources.component";

@NgModule({
  declarations: [
    ResourcesComponent
  ],
  imports: [
    ResourcesRoutingModule
  ],
  exports: []
})
export class ResourcesModule {}
