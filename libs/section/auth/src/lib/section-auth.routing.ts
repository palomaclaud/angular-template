import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: AuthComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class SectionAuthRoutingModule {}
