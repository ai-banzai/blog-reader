import { Component, OnInit } from '@angular/core';
import { Post } from "../core/post.model";
import {PostService} from "../core/post.service"
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: Post[];
  p: number = 1;
  
  onActivate(event) {
    let scrollToTop = window.setInterval(() => {
        let pos = window.pageYOffset;
        if (pos > 0) {
            window.scrollTo(0, pos - 60); // how far to scroll on each step
        } else {
            window.clearInterval(scrollToTop);
        }
    }, 16);
  }

  constructor(private postService: PostService) {
    this.posts = [];
  }

  ngOnInit() {
    // Subscribe
    this.postService.list().subscribe((posts: Post[]) => {
      //  Store
      this.posts = posts;
    });
  };
  


}

