import { NgModule } from "@angular/core";
import { InternalDocumentsComponent } from "./internal-documents.component";
import { InternalDocumentsRoutingModule } from "./internal-ducuments-routing.module";

@NgModule({
  declarations: [
    InternalDocumentsComponent
  ],
  imports: [
    InternalDocumentsRoutingModule
  ],
  exports: []
})
export class InternalDocumentsModule {}
