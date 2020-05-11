import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Comment, CommentAdapter } from "./comment.model";
import { Observable} from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class CommentService {
	private baseUrl = "https://public-api.wordpress.com/rest/v1.1/sites/en.blog.wordpress.com/posts/";

	constructor(private http: HttpClient, private adapter: CommentAdapter) {}
	list(id): Observable<Comment[]> {
		const url = this.baseUrl + id + "/replies";
		return this.http
		  .get(url)
		  .pipe(
			// Adapt each item in the raw data array
			map((data: any,{}) => data.comments.map(item => this.adapter.adapt(item)))
		  );
	  }
}