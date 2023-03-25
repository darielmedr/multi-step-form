import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelectPlanRoutingModule } from './select-plan-routing.module';
import { SelectPlanComponent } from './select-plan.component';
import { PlanCardComponent } from './features/plan-card/plan-card.component';
import { FrequencySelectorComponent } from './features/frequency-selector/frequency-selector.component';
import { HeadingModule } from '../shared/components/heading/heading.module';
import { PricePipe } from '../shared/pipes/price.pipe';

@NgModule({
  declarations: [
    SelectPlanComponent,
    PlanCardComponent,
    FrequencySelectorComponent,
  ],
  imports: [CommonModule, SelectPlanRoutingModule, HeadingModule, PricePipe],
})
export class SelectPlanModule {}
