
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { ContainerModule } from './container/container.module';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
  BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    AppRoutingModule,
    ContainerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
