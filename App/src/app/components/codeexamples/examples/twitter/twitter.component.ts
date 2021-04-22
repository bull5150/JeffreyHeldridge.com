import { Component, OnInit } from '@angular/core';
import { TwitterapiService } from '../../../../services/twitterapi.service';
import { tweets } from '../../../../models/twitter_models';
import { NavigationEnd, Router } from '@angular/router';
import { trigger, transition, animate, style} from '@angular/animations';

declare let ga: Function;

@Component({
  selector: 'twitter',
  templateUrl: './twitter.component.html',
  styleUrls: ['./twitter.component.css'],
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
export class TwitterComponent implements OnInit {

  public tweets: tweets[];
  public searchSelection: string;
  public searchValue: string;
  public twitterOverlay: boolean;
  public toolActive: boolean;
  public showTwitter: boolean;

  constructor(public twitterService: TwitterapiService, public router: Router) { 
      ga('set', 'page', 'Twitter');
      ga('send', 'pageview');
  }

  ngOnInit(): void {
    this.searchSelection = "user";
    this.getTweetsbyUser("jmheldridge",50);
  }

  submitbtn() {
    console.log(this.searchSelection);
    if(this.searchSelection == "user")
    {
      this.getTweetsbyUser(this.searchValue,50);
    }
    else
    {
      this.getTweetsbyKeyword(this.searchValue, 50);
    }
  }

  getTweetsbyUser(userName: string, count: number){
    this.twitterService.getTweetsbyUser(userName, count).subscribe(response =>{
      this.tweets = response;
    });
  }
  getTweetsbyKeyword(keyword: string, count: number){
    this.twitterService.getTweetsKeyword(keyword, count).subscribe(response =>{
      this.tweets = response;
    });
  }

   //overlay functions
   hideAll(){
    this.toolActive = false;
    this.showTwitter = false;
  }
  toolAction(selected: string): void {
    this.hideAll();
    this.twitterOverlay = false;
    this.toolActive = true;
    switch(selected)
    {
      case "twitter":
        this.showTwitter = true;
        setTimeout(() => {
          this.twitterOverlay = true;
        }, 725);
        break;
    }
  }
  toolClose(): void {
    this.twitterOverlay = false;
    setTimeout(() => {
      this.toolActive = false;
    }, 725)
  }
}
