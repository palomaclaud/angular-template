import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthComponent } from './auth/auth.component';
import { SectionAuthRoutingModule } from './section-auth.routing';

@NgModule({
  imports: [
    /** Angular Modules */
    CommonModule,

    /** Section Router */
    SectionAuthRoutingModule,

    /** Section State */

    /** Material Modules */

    /** App Modules */
  ],
  declarations: [AuthComponent],
})
export class SectionAuthModule {}
