import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddonSummaryComponent } from './addon-summary.component';

describe('AddonSummaryComponent', () => {
  let component: AddonSummaryComponent;
  let fixture: ComponentFixture<AddonSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddonSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddonSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
