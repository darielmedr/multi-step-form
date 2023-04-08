import { BreakpointObserver } from '@angular/cdk/layout';
import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { combineLatest, map, Observable, Subject, takeUntil, tap } from 'rxjs';
import { BREAKPOINT } from '../shared/constants/breakpoints';
import { StepperService } from './data-access/stepper.service';
import { Step } from './models/step.model';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StepperComponent implements OnInit, OnDestroy {
  public steps$: Observable<Step[]> = new Observable();
  public isMinWidthTablet$: Observable<boolean> = new Observable();

  private readonly tabletBreakpoint = BREAKPOINT.TABLET;
  private destroy$: Subject<void> = new Subject();

  constructor(
    private stepperService: StepperService,
    private breakpointObserver: BreakpointObserver,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.steps$ = this.stepperService.getSteps();
    this.isMinWidthTablet$ = this.breakpointObserver
      .observe([`(min-width: ${this.tabletBreakpoint})`])
      .pipe(map((state) => state.matches));

    const onNavigationBack$ = this.stepperService.onNavigationBack();
    const onNavigationNext$ = this.stepperService.onNavigationNext();
    combineLatest([onNavigationBack$, onNavigationNext$])
      .pipe(
        takeUntil(this.destroy$),
        map(() => this.stepperService.getStepPath()),
        tap((path) => this.router.navigateByUrl(path))
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public selectStep(step: Step): void {
    this.stepperService.setStep(step.step);
  }
}
