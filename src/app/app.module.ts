import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationActionsModule } from './navigation-actions/navigation-actions.module';
import { StepperModule } from './stepper/stepper.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StepperModule,
    NavigationActionsModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
