import { NgModule } from '@angular/core';
import { AddonSummaryComponent } from './addon-summary.component';
import { PricePipe } from 'src/app/shared/pipes/price.pipe';

@NgModule({
  declarations: [AddonSummaryComponent],
  imports: [PricePipe],
  exports: [AddonSummaryComponent],
})
export class AddonSummaryModule {}
