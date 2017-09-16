import { NgModule }       from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HeaderComponent } from './header-component/header.component';
import { FooterComponent } from './footer-component/footer.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  declarations: [
    HeaderComponent,
    FooterComponent
  ]
})
export class PageComponentsModule {}