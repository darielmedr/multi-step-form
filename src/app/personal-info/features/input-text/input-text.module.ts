import { NgModule } from '@angular/core';
import { NgIf } from '@angular/common';
import { InputTextComponent } from './input-text.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [InputTextComponent],
  imports: [NgIf, ReactiveFormsModule],
  exports: [InputTextComponent],
})
export class InputTextModule {}
