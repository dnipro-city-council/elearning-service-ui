import { NgModule } from '@angular/core';
import { TrainingsComponent } from './trainings.component';
import { TrainingsRoutingModule } from './trainings-routing.module';
import { CovalentExpansionPanelModule } from '@covalent/core';
import { TrainingsService } from './shared/trainings.service';
import { MaterialModule } from '@angular/material';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  declarations: [
    TrainingsComponent
  ],
  imports: [
    CovalentExpansionPanelModule.forRoot(),
    MaterialModule,
    TrainingsRoutingModule,
    CommonModule,
    FlexLayoutModule
  ],
  providers: [TrainingsService],
  exports: []
})
export class TrainingsModule {}
