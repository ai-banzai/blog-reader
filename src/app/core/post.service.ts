import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Post, PostAdapter } from "./post.model";
import { Observable} from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class PostService {
	private baseUrl = "https://public-api.wordpress.com/rest/v1.1/sites/en.blog.wordpress.com/posts/";

	constructor(private http: HttpClient, private adapter: PostAdapter) {}
	list(): Observable<Post[]> {
		const url = this.baseUrl;
		return this.http
		  .get(url)
		  .pipe(
			// Adapt each item in the raw data array
			map((data: any,{}) => data.posts.map(item => this.adapter.adapt(item)))
		  );
	  }
}