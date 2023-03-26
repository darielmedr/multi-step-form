import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { PaymentFrequency } from 'src/app/select-plan/models/payment-frequency.model';

@Component({
  selector: 'app-addons-total-price',
  templateUrl: './addons-total-price.component.html',
  styleUrls: ['./addons-total-price.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddonsTotalPriceComponent {
  @Input() totalPrice = 0;
  @Input() paymentFrequency: PaymentFrequency = 'monthly';

  private readonly paymentFrequencyMap: Record<PaymentFrequency, string> = {
    monthly: 'per month',
    yearly: 'per year',
  };

  public get isMonthlyPayment(): boolean {
    return this.paymentFrequency === 'monthly';
  }

  public get paymentFrequencyText(): string {
    return this.paymentFrequencyMap[this.paymentFrequency];
  }
}
