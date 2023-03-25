import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { PaymentFrequency } from '../../models/payment-frequency.model';
import { DEFAULT_PLAN_VALUE, Plan } from '../../models/plan.model';

@Component({
  selector: 'app-plan-card',
  templateUrl: './plan-card.component.html',
  styleUrls: ['./plan-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlanCardComponent {
  @Input() isSelected = false;
  @Input() paymentFrequency: PaymentFrequency = 'monthly';
  @Input() plan: Plan = DEFAULT_PLAN_VALUE;

  @Output() selected: EventEmitter<Plan> = new EventEmitter();

  public shouldShowDiscountInfo(): boolean {
    return (
      Boolean(this.plan.discountInfo) && this.paymentFrequency === 'yearly'
    );
  }
}
