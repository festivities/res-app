import { Injectable } from '@angular/core';

@Injectable()
export class NavigationService {
  headerProperties = {
    navLinks : [
      {
        index : 0,
        key : "about",
        value : "ABOUT"
      }, {
        index : 1,
        key : "services",
        value : "SERVICES"
      }, {
        index : 2,
        key : "history",
        value : "HISTORY"
      }, {
        index : 3,
        key : "contact",
        value : "CONTACT"
      }
    ],
    title : {
      key: "index",
      value: "JORDAN FOSTER"
    }
  }
  
  getNavLinks () {
    return this.headerProperties;
  }
  
  
}