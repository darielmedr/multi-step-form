import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddonsRoutingModule } from './addons-routing.module';
import { AddonsComponent } from './addons.component';
import { AddonModule } from './features/addon/addon.module';
import { HeadingModule } from '../shared/components/heading/heading.module';

@NgModule({
  declarations: [AddonsComponent],
  imports: [CommonModule, AddonsRoutingModule, AddonModule, HeadingModule],
})
export class AddonsModule {}
