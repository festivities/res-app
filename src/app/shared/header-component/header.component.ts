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
    '(document:click)': 'onClick()'
  }
})

export class HeaderComponent {
  headerTitle = 'Jordan Foster';
  isNavMenuOpen = false;
  isNavMenuClicked = false;
  navLinks = [];
  
  constructor(private navigationService: NavigationService){}
  
  ngOnInit(): void {
    this.navLinks = this.navigationService.getNavLinks();
  }
  
  openNavMenu (): void {
      this.isNavMenuOpen = !this.isNavMenuOpen;
      this.isNavMenuClicked = true;
  }
  
  onClick(): void {
    if (!this.isNavMenuClicked && this.isNavMenuOpen) {
      this.isNavMenuOpen = false;
    } else {
      this.isNavMenuClicked = false;
    }
  }
  
  setPage (key): void {
    this.isNavMenuClicked = true;
    if (key === "aboutNavLink") {
      
    } else if (key === "servicesNavLink") {
      
    } else if (key === "historyNavLink") {
      
    } else if (key === "contactNavLink") {
      
    }
  }
}
