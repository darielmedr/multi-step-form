import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  combineLatest,
  map,
  Observable,
  of,
  Subject,
} from 'rxjs';
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

  private next$: Subject<void> = new Subject();
  private back$: Subject<void> = new Subject();
  private currentStep$: BehaviorSubject<number> = new BehaviorSubject(
    FIRST_STEP_VALUE
  );

  constructor() {}

  public onNavigationNext(): Observable<void> {
    return this.next$.asObservable();
  }

  public onNavigationBack(): Observable<void> {
    return this.back$.asObservable();
  }

  public getSteps(): Observable<Step[]> {
    return of(this.steps);
  }

  public getStepPath(): string {
    const currentStep = this.currentStep$.value;
    const { path } = this.steps[currentStep - 1];
    return path;
  }

  public setStep(value: number): void {
    this.currentStep$.next(value);
  }

  public goNext(): void {
    const currentStep = this.currentStep$.value;

    if (!this.isStepLast(currentStep)) {
      this.currentStep$.next(currentStep + 1);
      this.next$.next();
    }
  }

  public goBack(): void {
    const currentStep = this.currentStep$.value;

    if (!this.isStepFirst(currentStep)) {
      this.currentStep$.next(currentStep - 1);
      this.back$.next();
    }
  }

  public isFirstStep(): Observable<boolean> {
    return this.currentStep$.pipe(map((step) => this.isStepFirst(step)));
  }

  public isLastStep(): Observable<boolean> {
    return this.currentStep$.pipe(map((step) => this.isStepLast(step)));
  }

  private isStepFirst(step: number): boolean {
    return step === FIRST_STEP_VALUE;
  }

  private isStepLast(step: number): boolean {
    return step === this.steps.length;
  }
}
