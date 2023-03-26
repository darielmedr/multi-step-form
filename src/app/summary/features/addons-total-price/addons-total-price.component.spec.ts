import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddonsTotalPriceComponent } from './addons-total-price.component';

describe('AddonsTotalPriceComponent', () => {
  let component: AddonsTotalPriceComponent;
  let fixture: ComponentFixture<AddonsTotalPriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddonsTotalPriceComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddonsTotalPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
