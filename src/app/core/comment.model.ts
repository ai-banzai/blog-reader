import { Injectable } from "@angular/core";
export class Comment {
	constructor(
	  public id: number,
	  public author: string,
	  public content: string,
	  public avatar: string,
	  public date: Date
	) {}
  }

  @Injectable({
	providedIn: "root"
  })
  export class CommentAdapter {
	adapt(item: any): Comment {
	  return new Comment(item.ID, item.author.name, item.content, item.author.avatar_URL, new Date(item.date));
	}
  }