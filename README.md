# blog-reader
 
An app for viewing posts from https://en.blog.wordpress.com/ .

This app has 2 custom components: "posts", which shows a list of posts, and "single", which shows a single post with comments. (Can be seen in "src/app/posts" and "src/app/single")

Those components use services ("comment.service.ts" and "post.service.ts" in "src/app/core"), which connect with Wordpress API, transform the data using adapters (adapters can be seen in "post.model.ts" and "comment.model.ts" in "src/app/core") and return objects Post and Comment.

In order to run the app:
-download and unpack the repository
-open the repository folder in a terminal and execute "ng serve" (angular needed)

Thank you!




