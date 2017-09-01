import { Injectable } from '@angular/core';

import { HeaderComponent } from '../header-component/header.component';

@Injectable()
export class NavigationService {
  navLinks = [
    {
      index : 0,
      key : "aboutNavLink",
      value : "ABOUT"
    }, {
      index : 1,
      key : "servicesNavLink",
      value : "SERVICES"
    }, {
      index : 2,
      key : "historyNavLink",
      value : "HISTORY"
    }, {
      index : 3,
      key : "contactNavLink",
      value : "CONTACT"
    }
  ];
  
  currentScreen = "home";
  
  getNavLinks () {
    return this.navLinks;
  }
  
  
}