import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Optional,
  Self,
} from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { isHtmlInputElement } from 'src/app/shared/utils/html-guards';
import { InputType } from '../../models/input-text.model';

type CustomFn<T = string> = (arg: T) => void;

const DEFAULT_ERROR_MESSAGES_MAP = new Map([
  ['required', 'This field is required'],
  ['pattern', 'Invalid format'],
  ['email', 'Invalid email'],
  ['minlength', 'Value is too short'],
]);

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputTextComponent implements ControlValueAccessor {
  @Input() label = '';
  @Input() placeholder = '';
  @Input() type: InputType = 'text';
  @Input() disabled = false;

  private _value = '';
  @Input()
  get value(): string {
    return this._value;
  }
  set value(val: string) {
    this._value = val;
    this.onChange(val);
    this.onTouched(val);
  }

  private _errorMessagesMap: Map<string, string> = new Map(
    DEFAULT_ERROR_MESSAGES_MAP
  );
  @Input()
  get errorMessagesMap(): Map<string, string> {
    return this._errorMessagesMap;
  }
  set errorMessagesMap(map: Map<string, string>) {
    this._errorMessagesMap = new Map([...this._errorMessagesMap, ...map]);

    console.log(this.errorMessagesMap);
  }

  constructor(@Self() @Optional() private ngControl?: NgControl) {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  get errorMessage() {
    if (!this.isInvalid) return '';

    const errorNames = Object.keys(this.ngControl?.errors ?? {});
    const firstExistingErrorName = errorNames.find((errorName) =>
      this.errorMessagesMap.has(errorName)
    );
    return firstExistingErrorName
      ? this.errorMessagesMap.get(firstExistingErrorName)
      : '';
  }

  get isInvalid(): boolean {
    const { valid, touched } = this.ngControl ?? {};
    return Boolean(touched) && !valid;
  }

  public onChange: CustomFn = () => {};
  public onTouched: CustomFn = () => {};

  public writeValue(target: EventTarget | null): void {
    this.value = isHtmlInputElement(target) ? target.value : '';
  }

  public registerOnChange(fn: CustomFn): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: CustomFn): void {
    this.onTouched = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  public onBlur(): void {
    this.ngControl?.control?.markAsTouched();
  }
}
