import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepperComponent } from './stepper.component';
import { StepComponent } from './feature/step/step.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [StepperComponent, StepComponent],
  imports: [CommonModule, RouterModule],
  exports: [StepperComponent],
})
export class StepperModule {}
