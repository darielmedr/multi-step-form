import { PaymentFrequency } from './../../../select-plan/models/payment-frequency.model';
import { Component, Input } from '@angular/core';
import { Addon, DEFAULT_ADDON_VALUE } from 'src/app/addons/models/addon.model';

@Component({
  selector: 'app-addon-summary',
  templateUrl: './addon-summary.component.html',
  styleUrls: ['./addon-summary.component.scss'],
})
export class AddonSummaryComponent {
  @Input() addon: Addon = DEFAULT_ADDON_VALUE;
  @Input() paymentFrequency: PaymentFrequency = 'monthly';
}
