import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
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

  private selectedAddons$ = new BehaviorSubject<Addon[]>([]);

  public getAddons(): Observable<Addon[]> {
    return of(this.addons);
  }

  public getSelectedAddons(): Observable<Addon[]> {
    return this.selectedAddons$.asObservable();
  }
  public selectAddons(addons: Addon[]): void {
    return this.selectedAddons$.next(addons);
  }
}
