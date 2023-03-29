import { Component, OnInit } from '@angular/core';
import { map, Observable, share } from 'rxjs';
import { StepperService } from '../stepper/data-access/stepper.service';

@Component({
  selector: 'app-navigation-actions',
  templateUrl: './navigation-actions.component.html',
  styleUrls: ['./navigation-actions.component.scss'],
})
export class NavigationActionsComponent implements OnInit {
  public showBack$: Observable<boolean> = new Observable();
  public isLastStep$: Observable<boolean> = new Observable();

  constructor(private stepperService: StepperService) {}

  ngOnInit(): void {
    this.showBack$ = this.stepperService
      .isFirstStep()
      .pipe(map((isFirstStep) => !isFirstStep));
    this.isLastStep$ = this.stepperService.isLastStep().pipe(share());
  }

  public goNext(): void {
    this.stepperService.goNext();
  }

  public goBack(): void {
    this.stepperService.goBack();
  }
}
