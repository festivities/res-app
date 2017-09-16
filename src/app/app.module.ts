import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { FooterComponent } from './shared/footer-component/footer.component';
import { HeaderComponent } from './shared/header-component/header.component';
import { NavigationService } from './shared/navigation-service/navigation-service.component';

import { AboutComponent } from './views/about-component/about.component';
import { HomeComponent } from './views/home-component/home.component';

import { AppRoutingModule } from './app-routing.module';

const appRoutes: Routes = [
  { path: 'index', component: HomeComponent },
  { path: 'about', component: AboutComponent }
//  { path: '',   redirectTo: '/index', pathMatch: 'full' },
//  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    AboutComponent,
    HomeComponent
  ],
  providers: [NavigationService],
  bootstrap: [AppComponent]
})
export class AppModule {}