import { Component, OnInit } from '@angular/core';
import { TwitterapiService } from 'src/app/services/twitterapi.service';
import { tweets } from 'src/app/models/twitter_models';

@Component({
  selector: 'twitter',
  templateUrl: './twitter.component.html',
  styleUrls: ['./twitter.component.css']
})
export class TwitterComponent implements OnInit {

  public tweets: tweets[];
  public searchSelection: string;
  public searchValue: string;

  constructor(public twitterService: TwitterapiService) { }

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
}
