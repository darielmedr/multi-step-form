import { NgModule } from '@angular/core';
import { NgIf } from '@angular/common';
import { AddonsTotalPriceComponent } from './addons-total-price.component';
import { PricePipe } from 'src/app/shared/pipes/price.pipe';

@NgModule({
  declarations: [AddonsTotalPriceComponent],
  imports: [NgIf, PricePipe],
  exports: [AddonsTotalPriceComponent],
})
export class AddonsTotalPriceModule {}
