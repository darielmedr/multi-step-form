import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanSummaryComponent } from './plan-summary.component';

describe('PlanSummaryComponent', () => {
  let component: PlanSummaryComponent;
  let fixture: ComponentFixture<PlanSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
