import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { HeadingModule } from 'src/app/shared/components/heading/heading.module';
import { PersonalInfoRoutingModule } from './personal-info-routing.module';
import { PersonalInfoComponent } from './personal-info.component';
import { InputTextModule } from './features/input-text/input-text.module';

@NgModule({
  declarations: [PersonalInfoComponent],
  imports: [
    CommonModule,
    PersonalInfoRoutingModule,
    ReactiveFormsModule,
    HeadingModule,
    InputTextModule,
  ],
})
export class PersonalInfoModule {}
