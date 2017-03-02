import {Component, OnInit} from '@angular/core';
import {TrainingsService} from './shared/trainings.service';
import { Training } from './shared/trainings.constant';

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.css']
})
export class TrainingsComponent implements OnInit {

  private trainings: Training[];

  constructor(private trainingsService: TrainingsService) {
  }

  ngOnInit() {
    this.trainingsService.loadTrainings().subscribe(trainings => this.trainings = trainings);
  }

  expandedEvent(): void {

  }

  collapsedEvent(): void {

  }

}
