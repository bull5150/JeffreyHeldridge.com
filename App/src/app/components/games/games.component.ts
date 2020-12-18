import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

declare let ga: Function;

@Component({
  selector: 'games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  constructor(public router: Router){ 
      ga('set', 'page', 'Games');
      ga('send', 'pageview');
  }

  ngOnInit(){
  }
}
