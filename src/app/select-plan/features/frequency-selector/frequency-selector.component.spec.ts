import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrequencySelectorComponent } from './frequency-selector.component';

describe('FrequencySelectorComponent', () => {
  let component: FrequencySelectorComponent;
  let fixture: ComponentFixture<FrequencySelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrequencySelectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrequencySelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
