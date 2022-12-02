import { Component, Input, Output, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Article } from 'src/Article';
import { ArticleStorageService } from 'src/app/services/article.storage.service';

interface CompleteArticle extends Article {
  name?: string;
}

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.css'],
})
export class ArticleItemComponent implements OnInit {
  @Input() article: CompleteArticle;

  constructor() {}
  async ngOnInit(): Promise<void> {}
}
