import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { PaymentFrequency } from '../models/payment-frequency.model';
import { Plan } from '../models/plan.model';

@Injectable({
  providedIn: 'root',
})
export class PlanSelectionService {
  private readonly plans: Plan[] = [
    {
      id: 1,
      name: 'Arcade',
      price: 9,
      logo: './assets/images/icon-arcade.svg',
      discountInfo: '2 months free',
    },
    {
      id: 2,
      name: 'Advanced',
      price: 12,
      logo: './assets/images/icon-advanced.svg',
      discountInfo: '2 months free',
    },
    {
      id: 3,
      name: 'Pro',
      price: 15,
      logo: './assets/images/icon-pro.svg',
      discountInfo: '2 months free',
    },
  ];

  private selectedPlan$ = new BehaviorSubject<Plan>(this.plans[0]);
  private paymentFrequency$ = new BehaviorSubject<PaymentFrequency>('monthly');

  public getPlans(): Observable<Plan[]> {
    return of(this.plans);
  }

  public getSelectedPlan(): Observable<Plan> {
    return this.selectedPlan$.asObservable();
  }
  public selectPlan(plan: Plan): void {
    return this.selectedPlan$.next(plan);
  }

  public getPaymentFrequency(): Observable<PaymentFrequency> {
    return this.paymentFrequency$.asObservable();
  }
  public selectPaymentFrequency(paymentFrequency: PaymentFrequency): void {
    return this.paymentFrequency$.next(paymentFrequency);
  }
}
