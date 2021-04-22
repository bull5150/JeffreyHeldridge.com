import { Component, OnInit } from '@angular/core';
import { Route, Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  navbarOpen = false;
  public homeActivated: boolean;
  public aboutActivated: boolean;
  public contactActivated: boolean;
  public examplesActivated: boolean;
  public blogreadActivated: boolean;
  public activatedRoute: string;

  constructor(private router: Router) { 
    this.router.events.subscribe(value => {
      if (value instanceof NavigationStart) {
        this.homeActivated = false;
        this.aboutActivated = false;
        this.contactActivated = false;
        this.examplesActivated = false;
        this.blogreadActivated = false;
        switch(value.url)
        {
          case "/home":
            this.homeActivated = true;
            break; 
          case "/about":
            this.aboutActivated = true;
            break; 
          case "/contact":
            this.contactActivated = true;
            break; 
          case "/examples":
            this.examplesActivated = true;
            break; 
          case "/blogread":
            this.blogreadActivated = true;
            break; 
        }
      }
    });
  }

  ngOnInit(): void {

  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

}
