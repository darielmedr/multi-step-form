import { PlanSelectionService } from './../select-plan/data-access/plan-selection.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AddonService } from './data-access/addon.service';
import { Addon } from './models/addon.model';
import { PaymentFrequency } from '../select-plan/models/payment-frequency.model';

@Component({
  selector: 'app-addons',
  templateUrl: './addons.component.html',
  styleUrls: ['./addons.component.scss'],
})
export class AddonsComponent implements OnInit {
  public addons$: Observable<Addon[]> = new Observable();
  public paymentFrequency$: Observable<PaymentFrequency> = new Observable();

  public title = 'Pick add-ons';
  public description = 'Add-ons help enhance your gaming experience.';

  private selectedAddons: Map<string, Addon> = new Map();

  constructor(
    private addonService: AddonService,
    private planSelectionService: PlanSelectionService
  ) {}

  ngOnInit(): void {
    this.addons$ = this.addonService.getAddons();
    this.paymentFrequency$ = this.planSelectionService.getPaymentFrequency();
  }

  public trackByFn(_: number, value: Addon): number {
    return value.id;
  }

  public updateSelectedAddons(addon: Addon): void {
    addon.isSelected
      ? this.selectedAddons.set(addon.name, addon)
      : this.selectedAddons.delete(addon.name);

    this.addonService.selectAddons(this.getSelectedAddons());
  }

  private getSelectedAddons(): Addon[] {
    return Array.from(this.selectedAddons.values());
  }
}
