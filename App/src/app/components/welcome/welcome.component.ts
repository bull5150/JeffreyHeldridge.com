import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

declare let ga: Function;

@Component({
  selector: 'welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(public router: Router) { 
    ga('set', 'page', 'Welcome');
    ga('send', 'pageview');
  }

  ngOnInit(): void {
  }

}
