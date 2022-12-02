import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { ArticleItemComponent } from './components/article-item/article-item.component';
import { UserComponent } from './components/user/user.component';
import { DetailComponent } from './components/detail/detail.component';
import { CommentItemComponent } from './components/comment-item/comment-item.component';

const appRoutes: Routes = [
  { path: '', component: ArticlesComponent },
  { path: 'detail/:id', component: DetailComponent, pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    ArticleItemComponent,
    UserComponent,
    DetailComponent,
    CommentItemComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
