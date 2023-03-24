import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, of, Subject } from 'rxjs';
import { Step } from '../models/step.model';

const FIRST_STEP_VALUE = 1;

@Injectable({
  providedIn: 'root',
})
export class StepperService {
  private readonly steps: Step[] = [
    {
      step: 1,
      title: 'Your info',
      description: 'Step 1',
      path: 'personal-info',
    },
    {
      step: 2,
      title: 'Select plan',
      description: 'Step 2',
      path: 'select-plan',
    },
    {
      step: 3,
      title: 'Add-ons',
      description: 'Step 3',
      path: 'addons',
    },
    {
      step: 4,
      title: 'Summary',
      description: 'Step 4',
      path: 'summary',
    },
  ];

  private currentStep$: BehaviorSubject<number> = new BehaviorSubject(
    FIRST_STEP_VALUE
  );

  constructor() {}

  public getSteps(): Observable<Step[]> {
    return of(this.steps);
  }

  public isFirstStep(): Observable<boolean> {
    return this.currentStep$.pipe(map((step) => step === FIRST_STEP_VALUE));
  }

  public isLastStep(): Observable<boolean> {
    return this.currentStep$.pipe(map((step) => step === this.steps.length));
  }

  public setStep(value: number): void {
    this.currentStep$.next(value);
  }

  public goNext(): void {
    this.currentStep$.next(this.currentStep$.value + 1);
  }

  public goBack(): void {
    this.currentStep$.next(this.currentStep$.value - 1);
  }
}
