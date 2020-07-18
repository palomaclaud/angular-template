import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { RootComponent } from './root.component';
import { ToolbarComponent } from './views/toolbar/toolbar.component';

@NgModule({
  declarations: [RootComponent, ToolbarComponent],
  imports: [
    /** Angular Modules */
    CommonModule,
    RouterModule,

    /** Firebase Modules */

    /** State Module */

    /** Material Modules */
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatRippleModule,

    /** App Modules */
  ],
})
export class RootModule {}
