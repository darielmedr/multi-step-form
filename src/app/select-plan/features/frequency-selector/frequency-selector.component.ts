import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { PaymentFrequency } from '../../models/payment-frequency.model';
import { SwitchSelectorState } from '../../models/switch-selector-state.model';

@Component({
  selector: 'app-frequency-selector',
  templateUrl: './frequency-selector.component.html',
  styleUrls: ['./frequency-selector.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrequencySelectorComponent implements OnInit {
  @Input() initialValue: PaymentFrequency = 'monthly';

  @Output() selected: EventEmitter<PaymentFrequency> = new EventEmitter();

  public switchState: SwitchSelectorState = 'left';

  private readonly switchStateMap: Record<
    SwitchSelectorState,
    PaymentFrequency
  > = {
    left: 'monthly',
    right: 'yearly',
  };

  ngOnInit(): void {
    this.switchState = this.swapObjKeyValue(this.switchStateMap)[
      this.initialValue
    ];
  }

  setState(state: SwitchSelectorState): void {
    this.switchState = state;

    const paymentFrequency = this.switchStateMap[state];
    this.selected.emit(paymentFrequency);
  }

  private swapObjKeyValue<K extends string, V extends string>(
    obj: Record<K, V>
  ): Record<V, K> {
    const reversedEntries = Object.entries(obj).map((v) => v.reverse());
    return Object.fromEntries(reversedEntries);
  }
}
