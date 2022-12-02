import { Component, OnInit, Input, Output } from '@angular/core';
import { CommentsService } from 'src/app/services/comments.service';
import { Article } from 'src/Article';
import { User } from 'src/User';
import { Comment } from 'src/Comment';
import { ActivatedRoute } from '@angular/router';
import { ArticleStorageService } from 'src/app/services/article.storage.service';
import { UserService } from 'src/app/services/user.service';

interface CompleteArticle extends Article {
  name?: string;
}

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  comments: Comment[] = [];
  article?: CompleteArticle;
  articleComments: Comment[];

  constructor(
    private commentService: CommentsService,
    private route: ActivatedRoute,
    private articleStorage: ArticleStorageService,
    private userService: UserService
  ) {}

  async ngOnInit(): Promise<void> {
    this.route.params.subscribe(async (params) => {
      if (this.articleStorage.getArticles === undefined) {
        await this.articleStorage.initialize();
      }

      const routeId = parseInt(params['id']);

      const articles = this.articleStorage.getArticles;
      this.article = articles.find((article) => article.id === routeId);

      this.articleComments = this.articleStorage.getComments(routeId);

      // console.log('asdsads', this.);
    });
  }
}
