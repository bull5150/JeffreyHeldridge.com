import { Component, OnInit } from '@angular/core';
import { TwitterapiService } from '../../../../services/twitterapi.service';
import { tweets } from '../../../../models/twitter_models';
import { ActivatedRoute } from '@angular/router';
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
  public infoLoaded: boolean;
  public userID: string;

  constructor(public twitterService: TwitterapiService, private route: ActivatedRoute) { 
      ga('set', 'page', 'Twitter');
      ga('send', 'pageview');
  }

  ngOnInit(): void {
    this.userID = this.route.snapshot.paramMap.get('userid');
    if(this.userID == null)
    {
      this.userID = "jmheldridge";
    }
    this.getTweetsbyUser(this.userID, 50);
    this.infoLoaded = false;
    this.searchSelection = "user";
    this.hideAll();
  }

  submitbtn() {
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
      this.infoLoaded = true;
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
