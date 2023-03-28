import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { PaymentFrequency } from 'src/app/select-plan/models/payment-frequency.model';
import { isHtmlInputElement } from 'src/app/shared/utils/html-guards';
import { Addon, DEFAULT_ADDON_VALUE } from '../../models/addon.model';

@Component({
  selector: 'app-addon',
  templateUrl: './addon.component.html',
  styleUrls: ['./addon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddonComponent {
  @Input() addon: Addon = DEFAULT_ADDON_VALUE;
  @Input() paymentFrequency: PaymentFrequency = 'monthly';

  @Output() changed: EventEmitter<Addon> = new EventEmitter();

  public change(target: EventTarget | null): void {
    const isSelected = isHtmlInputElement(target) ? target.checked : false;

    this.addon = {
      ...this.addon,
      isSelected,
    };
    this.changed.emit(this.addon);
  }
}
