import {NgModule} from "@angular/core";
import {TrainingsComponent} from "./trainings.component";
import {TrainingsRoutingModule} from "./trainings-routing.module";
import { CovalentExpansionPanelModule } from '@covalent/core';

@NgModule({
  declarations: [
    TrainingsComponent
  ],
  imports: [
    CovalentExpansionPanelModule.forRoot(),
    TrainingsRoutingModule
  ],
  exports: [],
  bootstrap: [TrainingsComponent]
})
export class TrainingsModule {}
