import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { RootStateModule } from '../root/state/root.state.module';
import { RootComponent } from './root.component';
import { NavigationComponent } from './views/navigation/navigation.component';
import { MenuComponent } from './views/menu/menu.component';
import { ToolbarComponent } from './views/toolbar/toolbar.component';

@NgModule({
  declarations: [RootComponent, NavigationComponent, MenuComponent, ToolbarComponent],
  imports: [
    /** Angular Modules */
    CommonModule,
    RouterModule,

    /** Firebase Modules */

    /** State Module */
    RootStateModule,

    /** Material Modules */
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatRippleModule,
    LayoutModule,
    MatSidenavModule,
    MatListModule,
    BrowserAnimationsModule,

    /** App Modules */
  ],
})
export class RootModule {}
