import { Injectable } from "@angular/core";
export class Post {
	constructor(
	  public id: number,
	  public title: string,
	  public content: string,
	  public excerpt: string,
	  public date: Date,
	  public image: string
	) {}
  }

  @Injectable({
	providedIn: "root"
  })
  export class PostAdapter {
	adapt(item: any): Post {
	  return new Post(item.ID, item.title, item.content, item.excerpt, new Date(item.date), item.featured_image);
	}
  }