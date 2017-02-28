import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { HomeRoutingRoutingModule } from "./home-routing.module";

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    HomeRoutingRoutingModule
  ],
  exports: []
})
export class HomeModule {}
