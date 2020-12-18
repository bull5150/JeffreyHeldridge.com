import { Component, OnInit} from '@angular/core';
import { BlogapiService } from '../../services/blogapi.service';
import { blog } from '../../models/blog_models';
import { NavigationEnd, Router } from '@angular/router';

declare let ga: Function;

@Component({
  selector: 'blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})

export class BlogComponent implements OnInit {

  public blogList: blog[];

  constructor(private blogService:BlogapiService, public router: Router) {
      ga('set', 'page', 'Blog');
      ga('send', 'pageview');
   }

  ngOnInit(): void {
    this.blogService.getBlogList().subscribe(response =>{
      this.blogList = response;
      this.blogList.reverse();
    });
  }
}
