import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AddonService } from '../addons/data-access/addon.service';
import { Addon } from '../addons/models/addon.model';
import { PlanSelectionService } from '../select-plan/data-access/plan-selection.service';
import { PaymentFrequency } from '../select-plan/models/payment-frequency.model';
import { Plan } from '../select-plan/models/plan.model';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SummaryComponent implements OnInit {
  public selectedPlan$: Observable<Plan> = new Observable();
  public paymentFrequency$: Observable<PaymentFrequency> = new Observable();
  public selectedAddons$: Observable<Addon[]> = new Observable();
  public addonsTotalPrice$: Observable<number> = new Observable();

  public title = 'Finishing up';
  public description = 'Double-check everything looks OK before confirming.';

  constructor(
    private router: Router,
    private planSelectionService: PlanSelectionService,
    private addonService: AddonService
  ) {}

  ngOnInit(): void {
    this.selectedPlan$ = this.planSelectionService.getSelectedPlan();
    this.paymentFrequency$ = this.planSelectionService.getPaymentFrequency();
    this.selectedAddons$ = this.addonService.getSelectedAddons();
    this.addonsTotalPrice$ = this.selectedAddons$.pipe(
      map((addons) =>
        addons.reduce((totalPrice, addon) => totalPrice + addon.price, 0)
      )
    );
  }

  public trackByFn(_: number, value: Addon): number {
    return value.id;
  }

  public changePlan(): void {
    this.router.navigateByUrl('/select-plan');
  }
}
