import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routing';
import { RootComponent } from './root/root.component';
import { RootModule } from './root/root.module';

@NgModule({
  imports: [
    /** Angular Modules */
    BrowserModule,

    /** App Router */
    AppRoutingModule,

    /** Root Module */
    RootModule,
  ],
  providers: [],
  bootstrap: [RootComponent],
})
export class AppModule {}
