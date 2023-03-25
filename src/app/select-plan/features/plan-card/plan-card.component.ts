import { PaymentFrequency } from './../../models/payment-frequency.model';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Plan } from '../../models/plan.model';

@Component({
  selector: 'app-plan-card',
  templateUrl: './plan-card.component.html',
  styleUrls: ['./plan-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlanCardComponent {
  @Input() isSlected = false;
  @Input() paymentFrequency: PaymentFrequency = 'monthly';
  @Input() plan: Plan = {
    name: '',
    price: 0,
    logo: '',
    discountInfo: '',
  };

  @Output() selected: EventEmitter<string> = new EventEmitter();

  public shouldShowDiscountInfo(): boolean {
    return (
      Boolean(this.plan.discountInfo) && this.paymentFrequency === 'yearly'
    );
  }
}
