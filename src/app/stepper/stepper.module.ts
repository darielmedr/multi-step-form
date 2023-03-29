import { LayoutModule } from '@angular/cdk/layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepperComponent } from './stepper.component';
import { StepComponent } from './features/step/step.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [StepperComponent, StepComponent],
  imports: [CommonModule, RouterModule, LayoutModule],
  exports: [StepperComponent],
})
export class StepperModule {}
