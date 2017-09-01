import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header-component/header.component';
import { NavigationService } from './shared/navigation-service/navigation-service.component';
import { HighlightDirective } from './shared/on-field-click/onfieldclick.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [NavigationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
