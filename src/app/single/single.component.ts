import { Component, OnInit } from '@angular/core';
import { Post } from "../core/post.model";
import {PostService} from "../core/post.service"
import { Comment } from "../core/comment.model";
import {CommentService} from "../core/comment.service"
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.scss']
})
export class SingleComponent implements OnInit {
  posts: Post[];
  comments: Comment[];
  id: number;
  single: Post;
  p: number = 1;

  constructor(private route: ActivatedRoute, private postService: PostService, private commentService: CommentService) { 
    this.posts = [];
    this.comments = [];
    this.single = {id:1, title:"", content:"", excerpt:"", date: new Date(), image:""}
   }
  ngOnInit() {
    let id = this.route.snapshot.params.id;
    this.id = id;
    
    

    // Subscribe to posts
    this.postService.list().subscribe((posts: Post[]) => {
      //  Store
      this.posts = posts;
      this.single = posts.filter(i => i.id == id)[0];

    });

     // Subscribe to comments
     this.commentService.list(id).subscribe((comments: Comment[]) => {
      //  Store
      this.comments = comments;

    });

    console.log(this.comments)
   
  }

}
