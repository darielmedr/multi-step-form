import { NgModule } from '@angular/core';
import { PlanSummaryComponent } from './plan-summary.component';
import { PricePipe } from 'src/app/shared/pipes/price.pipe';
import { TitleCasePipe } from '@angular/common';

@NgModule({
  declarations: [PlanSummaryComponent],
  imports: [PricePipe, TitleCasePipe],
  exports: [PlanSummaryComponent],
})
export class PlanSummaryModule {}
