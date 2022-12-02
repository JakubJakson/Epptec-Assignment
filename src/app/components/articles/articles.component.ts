import { Component, Input, Output, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { ArticleStorageService } from 'src/app/services/article.storage.service';
import { UserService } from 'src/app/services/user.service';

import { Article } from 'src/Article';
import { User } from 'src/User';

interface CompleteArticle extends Article {
  name?: string;
}

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css'],
})
export class ArticlesComponent implements OnInit {
  articles: Article[] = [];
  users: User[] = [];
  completeArticles: CompleteArticle[];

  constructor(
    private userService: UserService,
    private articleStorage: ArticleStorageService
  ) {}
  async ngOnInit(): Promise<void> {
    if (this.articleStorage.getArticles === undefined) {
      this.users = await this.userService.getUserName();
      await this.articleStorage.initialize();
    }

    this.completeArticles = this.articleStorage.getArticles;
  }
}
