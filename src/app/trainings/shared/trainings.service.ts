import {Http, Headers} from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

/*
 {
   title: 'NewTraining',
   imageUrl: 'http://www.freeiconspng.com/uploads/operations-training-icon-8.png',
   description: 'test long description test long description test long  long description test long description ',
   isAssigned: true,
   didAttend: false,
   categories: ['']
 }
 */

@Injectable()
export class TrainingsService {

  constructor(private http: Http) {
  }

  loadTrainings(): Observable<any> {
    return this.http.get('https://dcc-elearning-service-api.herokuapp.com/api/trainings').map(res => res.json());
  }

}
