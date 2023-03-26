import { NgModule } from '@angular/core';
import { AddonComponent } from './addon.component';
import { PricePipe } from 'src/app/shared/pipes/price.pipe';
import { NgClass } from '@angular/common';

@NgModule({
  declarations: [AddonComponent],
  imports: [NgClass, PricePipe],
  exports: [AddonComponent],
})
export class AddonModule {}
