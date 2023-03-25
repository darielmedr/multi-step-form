import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Plan } from '../models/plan.model';

@Injectable({
  providedIn: 'root',
})
export class PlanSelectionService {
  private readonly plans: Plan[] = [
    {
      name: 'Arcade',
      price: 9,
      logo: './assets/images/icon-arcade.svg',
      discountInfo: '2 months free',
    },
    {
      name: 'Advanced',
      price: 12,
      logo: './assets/images/icon-advanced.svg',
      discountInfo: '2 months free',
    },
    {
      name: 'Pro',
      price: 15,
      logo: './assets/images/icon-pro.svg',
      discountInfo: '2 months free',
    },
  ];

  public getPlans(): Observable<Plan[]> {
    return of(this.plans);
  }
}
