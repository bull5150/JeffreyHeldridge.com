import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, style} from '@angular/animations';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
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

export class HomeComponent implements OnInit {

  constructor() { }

  public toolActive: boolean;
  public showGoogle: boolean;
  public showAbout: boolean;
  public showBlog: boolean;
  public showWelcome: boolean;
  public showTwitter: boolean;
  public showEmail: boolean;
  public showGames: boolean;
  //overlays
  public googleMapOverlay: boolean;
  public aboutOverlay: boolean;
  public blogOverlay: boolean;
  public twitterOverlay: boolean;
  public emailOverlay: boolean;
  public gamesOverlay: boolean;

  ngOnInit(): void {
    this.hideAll();
    this.showWelcome = true;
  }

  hideAll(){
    this.toolActive = false;
    this.showGoogle = false;
    this.showAbout = false;
    this.showBlog = false;
    this.showTwitter = false;
    this.showWelcome = false;
    this.showEmail = false;
    this.showGames = false;
  }

  toolAction(selected: string): void {
    this.hideAll();
    this.googleMapOverlay = false;
    this.blogOverlay = false;
    this.aboutOverlay = false;
    this.twitterOverlay = false;
    this.emailOverlay = false;
    this.gamesOverlay = false;
    this.toolActive = true;
    switch(selected)
    {
      case "welcome":
        this.showWelcome = true
        this.toolClose();
        break;
      case "about":
        this.showAbout = true;
        setTimeout(() => {
          this.aboutOverlay = true;
        }, 725);
        break;
      case "blog":
          this.showBlog = true;
          setTimeout(() => {
            this.blogOverlay = true;
          }, 725);
          break;
      case "google":
        this.showGoogle = true;
        setTimeout(() => {
          this.googleMapOverlay = true;
        }, 725);
        break;
      case "twitter":
        this.showTwitter = true;
        setTimeout(() => {
          this.twitterOverlay = true;
        }, 725);
        break;
      case "email":
        this.showEmail = true;
        setTimeout(() => {
          this.emailOverlay = true;
        }, 725);
        break;
      case "games":
        this.showGames = true;
        setTimeout(() => {
          this.gamesOverlay = true;
        }, 725);
        break;
    }
  }
  toolClose(): void {
    this.googleMapOverlay = false;
    this.aboutOverlay = false;
    this.blogOverlay = false;
    this.twitterOverlay = false;
    this.emailOverlay = false;
    this.gamesOverlay = false;
    setTimeout(() => {
      this.toolActive = false;
    }, 725)
  }
}
