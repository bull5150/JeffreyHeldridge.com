import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router'

declare let ga: Function;

@Component({
  selector: 'pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.css']
})
export class PagenotfoundComponent implements OnInit {

  public routeName: string;

  constructor(private route: ActivatedRoute,
    private router: Router
  ) { 
    this.router.events.forEach((event) => {
      if(event instanceof NavigationEnd)
      {
        this.ngOnInit();
      }
    });
    ga('set', 'page', 'Page_Not_Found');
    ga('send', 'pageview');
  }

  ngOnInit(): void {
    this.routeName = this.route.snapshot.url[0].path;
  }

}
