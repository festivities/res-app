import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HeaderComponent } from './header-component/header.component';
import { FooterComponent } from './footer-component/footer.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [BrowserModule],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedComponentModule { }
