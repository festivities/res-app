import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home-component/home.component';
import { AboutComponent } from './views/about-component/about.component';

const appRoutes: Routes = [
  { path: 'index', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: '',   redirectTo: '/index', pathMatch: 'full' }
//  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}