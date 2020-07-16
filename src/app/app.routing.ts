import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  /** Lazy loaded modules */
  {
    path: 'auth',
    loadChildren: () =>
      import('@app/section/auth').then((module) => module.SectionAuthModule),
  },

  {
    path: '**',
    redirectTo: '/auth',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
