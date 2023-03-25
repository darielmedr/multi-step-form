import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelectPlanRoutingModule } from './select-plan-routing.module';
import { SelectPlanComponent } from './select-plan.component';
import { PlanCardComponent } from './features/plan-card/plan-card.component';
import { PricePipe } from './pipes/price.pipe';
import { FrequencySelectorComponent } from './features/frequency-selector/frequency-selector.component';
import { HeadingModule } from '../shared/components/heading/heading.module';

@NgModule({
  declarations: [
    SelectPlanComponent,
    PlanCardComponent,
    PricePipe,
    FrequencySelectorComponent,
  ],
  imports: [CommonModule, SelectPlanRoutingModule, HeadingModule],
})
export class SelectPlanModule {}
