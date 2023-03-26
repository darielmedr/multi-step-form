import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeadingModule } from '../shared/components/heading/heading.module';
import { AddonSummaryModule } from './features/addon-summary/addon-summary.module';
import { AddonsTotalPriceModule } from './features/addons-total-price/addons-total-price.module';
import { PlanSummaryModule } from './features/plan-summary/plan-summary.module';

import { SummaryRoutingModule } from './summary-routing.module';
import { SummaryComponent } from './summary.component';

@NgModule({
  declarations: [SummaryComponent],
  imports: [
    CommonModule,
    SummaryRoutingModule,
    HeadingModule,
    AddonSummaryModule,
    PlanSummaryModule,
    AddonsTotalPriceModule,
  ],
})
export class SummaryModule {}
