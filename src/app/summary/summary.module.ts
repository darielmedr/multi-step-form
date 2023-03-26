import { NgModule } from '@angular/core';

import { SummaryRoutingModule } from './summary-routing.module';
import { SummaryComponent } from './summary.component';

@NgModule({
  declarations: [SummaryComponent],
  imports: [SummaryRoutingModule],
})
export class SummaryModule {}
