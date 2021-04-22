import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { trigger, transition, animate, style} from '@angular/animations';

declare let ga: Function;

@Component({
  selector: 'games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css'],
  animations:[
    trigger('slideInOut', [
      transition(':enter', [
        style({transform: 'translateX(100%)'}),
        animate('750ms ease-in', style({transform: 'translateX(0%)'}))
      ]),
      transition(':leave', [
        animate('750ms ease-in', style({transform: 'translateX(500%)'}))
      ]),
    ])
  ]
})
export class GamesComponent implements OnInit {

  public gamesOverlay: boolean;
  public toolActive: boolean;
  public showGames: boolean;

  constructor(public router: Router){ 
      ga('set', 'page', 'Games');
      ga('send', 'pageview');
  }

  ngOnInit(){
    this.hideAll();
  }

  //overlay functions
  hideAll(){
    this.toolActive = false;
    this.showGames = false;
  }
  toolAction(selected: string): void {
    this.hideAll();
    this.gamesOverlay = false;
    this.toolActive = true;
    switch(selected)
    {
      case "games":
        this.showGames = true;
        setTimeout(() => {
          this.gamesOverlay = true;
        }, 725);
        break;
    }
  }
  toolClose(): void {
    this.gamesOverlay = false;
    setTimeout(() => {
      this.toolActive = false;
    }, 725)
  }

}
