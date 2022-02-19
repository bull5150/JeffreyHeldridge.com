import { Component, OnInit} from '@angular/core';
import { BlogapiService } from '../../../../services/blogapi.service';
import { blog } from '../../../../models/blog_models';
import { NavigationEnd, Router } from '@angular/router';
import { trigger, transition, animate, style} from '@angular/animations';

declare let ga: Function;

@Component({
  selector: 'blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
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

export class BlogComponent implements OnInit {

  public blogList: blog[];
  public blogOverlay: boolean;
  public toolActive: boolean;
  public showBlog: boolean;
  public infoLoaded: boolean;

  constructor(private blogService:BlogapiService, public router: Router) {
      ga('set', 'page', 'Blog');
      ga('send', 'pageview');
   }

  ngOnInit(): void {
    this.infoLoaded = false;
    this.hideAll();
    this.blogService.getBlogList().subscribe(response =>{
      this.blogList = response;
      this.blogList.reverse();
      this.infoLoaded = true;
    });
  }
    //overlay functions
    hideAll(){
      this.toolActive = false;
      this.showBlog = false;
    }
    toolAction(selected: string): void {
      this.hideAll();
      this.blogOverlay = false;
      this.toolActive = true;
      switch(selected)
      {
        case "blog":
          this.showBlog = true;
          setTimeout(() => {
            this.blogOverlay = true;
          }, 725);
          break;
      }
    }
    toolClose(): void {
      this.blogOverlay = false;
      setTimeout(() => {
        this.toolActive = false;
      }, 725)
    }
}
