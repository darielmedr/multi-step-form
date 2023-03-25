import { PlanSelectionService } from './data-access/plan-selection.service';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Plan } from './models/plan.model';
import { PaymentFrequency } from './models/payment-frequency.model';

@Component({
  selector: 'app-select-plan',
  templateUrl: './select-plan.component.html',
  styleUrls: ['./select-plan.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectPlanComponent implements OnInit {
  public plans$: Observable<Plan[]> = new Observable();

  public selectedPlan$: Subject<string> = new Subject();
  public paymentFrequency$: BehaviorSubject<PaymentFrequency> =
    new BehaviorSubject<PaymentFrequency>('monthly');

  public title = 'Select your plan';
  public description = 'You have the option of monthly or yearly billing.';

  constructor(private planSelectionService: PlanSelectionService) {}

  ngOnInit(): void {
    this.plans$ = this.planSelectionService.getPlans();
  }

  public selectPlan(planName: string): void {
    this.selectedPlan$.next(planName);
  }

  public selectPaymentFrequency(paymentFrequency: PaymentFrequency): void {
    this.paymentFrequency$.next(paymentFrequency);
  }
}
