import { Component, EventEmitter, Output } from '@angular/core';
import { PaymentFrequency } from '../../models/payment-frequency.model';
import { SwitchSelectorState } from '../../models/switch-selector-state.model';

@Component({
  selector: 'app-frequency-selector',
  templateUrl: './frequency-selector.component.html',
  styleUrls: ['./frequency-selector.component.scss'],
})
export class FrequencySelectorComponent {
  @Output() selected: EventEmitter<PaymentFrequency> = new EventEmitter();

  public switchState: SwitchSelectorState = 'left';

  private readonly switchStateMap: Record<
    SwitchSelectorState,
    PaymentFrequency
  > = {
    left: 'monthly',
    right: 'yearly',
  };

  setState(state: SwitchSelectorState): void {
    this.switchState = state;

    const paymentFrequency = this.switchStateMap[state];
    this.selected.emit(paymentFrequency);
  }
}
