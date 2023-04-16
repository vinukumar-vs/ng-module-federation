import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LibUtilsModule } from 'lib-utils';

import { RestaurantsAppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RestaurantsAppRoutingModule,
    LibUtilsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
