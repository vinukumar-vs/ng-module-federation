import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LibUtilsModule } from 'lib-utils';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LibUtilsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
