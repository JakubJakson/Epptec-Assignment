import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Article } from 'src/Article';
import { Observable, of } from 'rxjs';
import axios from 'axios';
import { ArticleService } from './article.service';
import { UserService } from './user.service';
import { User } from 'src/User';
import { CommentsService } from './comments.service';
import { Comment } from 'src/Comment';

interface CompleteArticle extends Article {
  name?: string;
}

@Injectable({
  providedIn: 'root',
})
export class ArticleStorageService {
  private articles: CompleteArticle[];
  private users: User[];
  private comments: Comment[];

  public async initialize() {
    this.comments = await this.commentService.getComments();
    this.articles = await this.articleService.getArticles();
    this.users = await this.userService.getUserName();
    this.articles = await this.articles.map((article) => {
      return {
        ...article,
        name: this.users.find((user) => user.id === article.userId)?.name,
      };
    });
  }

  constructor(
    private commentService: CommentsService,
    private articleService: ArticleService,
    private userService: UserService
  ) {}

  get getArticles(): CompleteArticle[] {
    return this.articles;
  }

  set setArticles(articles: CompleteArticle[]) {
    this.articles = articles;
  }

  getComments(articleId: number) {
    return this.comments.filter((comment) => comment.postId === articleId);
  }
}
