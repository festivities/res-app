import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { SharedComponentModule } from './shared/shared-component.module';
import { ViewModule } from './views/view.module';
import { AppRoutingModule } from './app-routing.module';

import { NavigationService } from './shared/navigation-service/navigation-service.component';

@NgModule({
  imports: [
    BrowserModule,
    SharedComponentModule,
    ViewModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [NavigationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
