import { AsyncPipe, NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavigationActionsComponent } from './navigation-actions.component';

@NgModule({
  declarations: [NavigationActionsComponent],
  imports: [NgIf, AsyncPipe],
  exports: [NavigationActionsComponent],
})
export class NavigationActionsModule {}
