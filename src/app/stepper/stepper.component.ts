import { BreakpointObserver } from '@angular/cdk/layout';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { BREAKPOINT } from '../shared/constants/breakpoints';
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
  public isMinWidthTablet$: Observable<boolean> = new Observable();

  private readonly tabletBreakpoint = BREAKPOINT.TABLET;

  constructor(
    private stepperService: StepperService,
    private breakpointObserver: BreakpointObserver
  ) {}

  ngOnInit(): void {
    this.steps$ = this.stepperService.getSteps();
    this.isMinWidthTablet$ = this.breakpointObserver
      .observe([`(min-width: ${this.tabletBreakpoint})`])
      .pipe(map((state) => state.matches));
  }
}
