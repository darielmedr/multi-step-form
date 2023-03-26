import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'personal-info',
    pathMatch: 'full',
  },
  {
    path: 'personal-info',
    loadChildren: () =>
      import('./personal-info/personal-info.module').then(
        (m) => m.PersonalInfoModule
      ),
  },
  {
    path: 'select-plan',
    loadChildren: () =>
      import('./select-plan/select-plan.module').then(
        (m) => m.SelectPlanModule
      ),
  },
  {
    path: 'addons',
    loadChildren: () =>
      import('./addons/addons.module').then((m) => m.AddonsModule),
  },
  {
    path: 'summary',
    loadChildren: () =>
      import('./summary/summary.module').then((m) => m.SummaryModule),
  },
  {
    path: '**',
    redirectTo: 'personal-info',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
