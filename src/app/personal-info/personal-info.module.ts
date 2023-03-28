import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonalInfoRoutingModule } from './personal-info-routing.module';
import { PersonalInfoComponent } from './personal-info.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

import {
  MatFormFieldModule,
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
} from '@angular/material/form-field';
import { HeadingModule } from 'src/app/shared/components/heading/heading.module';
import { InputTextModule } from './features/input-text/input-text.module';

@NgModule({
  declarations: [PersonalInfoComponent],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'outline' },
    },
  ],
  imports: [
    CommonModule,
    PersonalInfoRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    HeadingModule,
    InputTextModule,
  ],
})
export class PersonalInfoModule {}
