import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  EMPTY,
  first,
  map,
  Observable,
  of,
  switchMap,
  tap,
} from 'rxjs';
import { Addon } from '../models/addon.model';

@Injectable({
  providedIn: 'root',
})
export class AddonService {
  private readonly addons: Addon[] = [
    {
      id: 1,
      name: 'Online service',
      description: 'Acces to multiplayer games',
      price: 1,
      isSelected: false,
    },
    {
      id: 2,
      name: 'Larger storage',
      description: 'Extra 1TB of cloud save',
      price: 2,
      isSelected: false,
    },
    {
      id: 3,
      name: 'Customizable profile',
      description: 'Custom theme on your profile',
      price: 2,
      isSelected: false,
    },
  ];

  private addons$ = new BehaviorSubject<Addon[]>([]);

  private canFetch = true;
  private addonsState: Map<number, Addon> = new Map();

  public getAddons(): Observable<Addon[]> {
    return this.addons$.asObservable();
  }

  /**
   * Emits no items and immediately emits a complete notification.
   */
  public fetchAddons() {
    return this.canFetch
      ? of(this.addons).pipe(
          first(),
          tap(() => this.disableFetch()),
          tap((addons) => this.initAddonsState(addons)),
          tap((addons) => this.emitAddons(addons)),
          switchMap(() => EMPTY)
        )
      : EMPTY;
  }

  public updateAddonsState(addon: Addon): void {
    const currentAddon = this.addonsState.get(addon.id);
    const hasChanged = currentAddon?.isSelected !== addon.isSelected;

    if (hasChanged) {
      this.addonsState.set(addon.id, addon);
      this.emitAddons(this.getCurrentAddonsState());
    }
  }

  public getSelectedAddons(): Observable<Addon[]> {
    return this.addons$
      .asObservable()
      .pipe(map((addons) => addons.filter((addon) => addon.isSelected)));
  }

  private disableFetch(): void {
    this.canFetch = false;
  }

  private initAddonsState(addons: Addon[]): void {
    this.addonsState = new Map(addons.map((addon) => [addon.id, addon]));
  }

  private emitAddons(addons: Addon[]): void {
    this.addons$.next(addons);
  }

  private getCurrentAddonsState(): Addon[] {
    return Array.from(this.addonsState.values());
  }
}
