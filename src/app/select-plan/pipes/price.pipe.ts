import { PaymentFrequency } from './../models/payment-frequency.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price',
})
export class PricePipe implements PipeTransform {
  private readonly frequencyMap: Record<PaymentFrequency, string> = {
    monthly: 'mo',
    yearly: 'yr',
  };
  private readonly currencySymbol = '$';

  transform(price: number, paymentFrequency: PaymentFrequency): string {
    const finalPrice = this.calculatePrice(price, paymentFrequency);
    const frequencyText = this.frequencyMap[paymentFrequency];

    return `${this.currencySymbol}${finalPrice}/${frequencyText}`;
  }

  private calculatePrice(
    price: number,
    paymentFrequency: PaymentFrequency
  ): number {
    return this.isYearlyPayment(paymentFrequency) ? price * 10 : price;
  }

  private isYearlyPayment(
    paymentFrequency: PaymentFrequency
  ): paymentFrequency is 'yearly' {
    return paymentFrequency === 'yearly';
  }
}
