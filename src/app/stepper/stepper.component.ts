import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StepperService } from './data-access/stepper.service';
import { Step } from './models/step.model';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StepperComponent implements OnInit {
  public steps$: Observable<Step[]> = new Observable();

  constructor(private stepperService: StepperService) {}

  ngOnInit(): void {
    this.steps$ = this.stepperService.getSteps();
  }
}
