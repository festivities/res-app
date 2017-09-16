import { NgModule }       from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HomeComponent } from './home-component/home.component';
import { AboutComponent } from './about-component/about.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  exports: [
    HomeComponent,
    AboutComponent
  ],
  declarations: [
    HomeComponent,
    AboutComponent
  ]
})
export class ViewsModule {}