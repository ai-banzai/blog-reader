import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule }    from '@angular/common/http';
import { PostsComponent } from './posts/posts.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { SingleComponent } from './single/single.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    SingleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
