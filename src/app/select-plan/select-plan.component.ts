import { PlanSelectionService } from './data-access/plan-selection.service';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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
  public selectedPlan$: Observable<Plan> = new Observable();
  public paymentFrequency$: Observable<PaymentFrequency> = new Observable();

  public title = 'Select your plan';
  public description = 'You have the option of monthly or yearly billing.';

  constructor(private planSelectionService: PlanSelectionService) {}

  ngOnInit(): void {
    this.plans$ = this.planSelectionService.getPlans();
    this.selectedPlan$ = this.planSelectionService.getSelectedPlan();
    this.paymentFrequency$ = this.planSelectionService.getPaymentFrequency();
  }

  public selectPlan(plan: Plan): void {
    this.planSelectionService.selectPlan(plan);
  }

  public selectPaymentFrequency(paymentFrequency: PaymentFrequency): void {
    this.planSelectionService.selectPaymentFrequency(paymentFrequency);
  }
}
