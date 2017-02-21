import {Component, Inject} from '@angular/core';
import {appNavigation, RouteConfig} from './constants/navigation.constant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(@Inject(appNavigation) private routeConfigs: RouteConfig[]) {}
}
