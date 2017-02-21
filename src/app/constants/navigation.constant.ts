
import { OpaqueToken } from "@angular/core";

export let appNavigation = new OpaqueToken("app.navigation");

export class RouteConfig {
  title: string;
  routerLink: string
}

export const navigationConfig: RouteConfig[] = [{
  title: 'Trainings',
  routerLink: '/trainings'
}, {
  title: 'Webinars',
  routerLink: '/webinars'
}, {
  title: 'Resources',
  routerLink: '/resources'
}, {
  title: 'Quizzes',
  routerLink: '/quizzes'
}, {
  title: 'Internal Documents',
  routerLink: '/internal-documents'
}];
