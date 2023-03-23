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
