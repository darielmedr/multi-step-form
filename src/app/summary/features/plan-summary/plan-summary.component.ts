import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PaymentFrequency } from 'src/app/select-plan/models/payment-frequency.model';
import {
  DEFAULT_PLAN_VALUE,
  Plan,
} from 'src/app/select-plan/models/plan.model';

@Component({
  selector: 'app-plan-summary',
  templateUrl: './plan-summary.component.html',
  styleUrls: ['./plan-summary.component.scss'],
})
export class PlanSummaryComponent {
  @Input() plan: Plan = DEFAULT_PLAN_VALUE;
  @Input() paymentFrequency: PaymentFrequency = 'monthly';

  @Output() changed: EventEmitter<void> = new EventEmitter();
}
