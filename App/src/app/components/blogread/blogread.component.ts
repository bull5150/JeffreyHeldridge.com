import { Component, OnInit} from '@angular/core';
import { BlogapiService } from '../../services/blogapi.service';
import { blog } from '../../models/blog_models';
import { NavigationEnd, Router } from '@angular/router';
import { trigger, transition, animate, style} from '@angular/animations';

declare let ga: Function;
@Component({
  selector: 'blogread',
  templateUrl: './blogread.component.html',
  styleUrls: ['./blogread.component.css']
})
export class BlogreadComponent implements OnInit {

  public blogList: blog[];
  public infoLoaded: boolean;

  constructor(private blogService:BlogapiService, public router: Router) {
      ga('set', 'page', 'BlogRead');
      ga('send', 'pageview');
   }

  ngOnInit(): void {
    this.infoLoaded = false;
    this.blogService.getBlogList().subscribe(response =>{
      this.blogList = response;
      this.blogList.reverse();
      this.infoLoaded = true;
    });
  }
}
