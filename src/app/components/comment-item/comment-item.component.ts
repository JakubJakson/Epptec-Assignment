import { Component, Input, Output, OnInit } from '@angular/core';
import { Comment } from 'src/Comment';
import { Article } from 'src/Article';

@Component({
  selector: 'app-comment-item',
  templateUrl: './comment-item.component.html',
  styleUrls: ['./comment-item.component.css'],
})
export class CommentItemComponent implements OnInit {
  @Input() comment: Comment;
  @Input() article: Article;
  constructor() {}
  ngOnInit(): void {}
}
