import { Component, OnInit } from '@angular/core';

import { AppComponent } from '../../app.component';
import { NavigationService } from '../navigation-service/navigation-service.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [
    '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css',
    './header.component.css'
  ],
  host: {
    '(document:click)': 'onClick()',
    '(window:resize)': 'onResize()'
  }
})

export class HeaderComponent {
  
  onResize = this.privateOnResize;
  setMenuClicked = this.publicSetMenuClicked;
  
  toggleDropDownMenu = this.publicToggleDropDownMenu;
  onClick = this.publicOnClick;
  navigateToPage = this.publicNavigateToPage;
  
  
  isNavMenuOpen = false;
  isNavMenuClicked = false;
  navLinks = [];
  menuActiveClass = "";
  
  constructor(private navigationService: NavigationService){}
  
  ngOnInit(): void {
    this.navLinks = this.navigationService.getNavLinks();
  }
  
  // Closes nav menu when window is resized
  privateOnResize (): void {
    this.menuActiveClass = "closed";
    this.isNavMenuOpen = false;
  }
  
  // Shows when toggle menu was clicked on
  publicSetMenuClicked(): void {
    this.isNavMenuClicked = true;
  }
  
  // Toggles nav menu display
  publicToggleDropDownMenu (): void {
    this.setMenuClicked();
    
    if (this.menuActiveClass === "opened") {
      this.menuActiveClass = "closed";
      setTimeout(() => this.isNavMenuOpen = false, 500);
    } else {
      this.isNavMenuOpen = true;
      this.menuActiveClass = "opened";
      // Extra timeout to handle set to false timeout when click on menu button rapidly
      setTimeout(() => this.isNavMenuOpen = true, 500);
    }
  }
  
  // Closes nav menu when user clicks somewhere other than nav menu
  publicOnClick(): void {
    if (!this.isNavMenuClicked && this.isNavMenuOpen) {
      this.toggleDropDownMenu();
    } else {
      this.isNavMenuClicked = false;
    }
  }
  
  // Used to navigate pages
  publicNavigateToPage (key): void {
    this.isNavMenuClicked = true;
    if (key === "aboutNavLink") {
      
    } else if (key === "servicesNavLink") {
      
    } else if (key === "historyNavLink") {
      
    } else if (key === "contactNavLink") {
      
    }
  }
}
