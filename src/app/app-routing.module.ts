import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SingleComponent } from './single/single.component';
import { PostsComponent} from './posts/posts.component'

const routes: Routes = [
  { path: 'single/:id', component: SingleComponent },
  { path: '**', component: PostsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
