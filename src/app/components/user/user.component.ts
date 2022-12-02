import { Component, Input, Output, OnInit } from '@angular/core';
import { Article } from 'src/Article';
import { User } from 'src/User';

@Component({
  selector: 'app-users',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  @Input() user: User;
  @Input() article: Article;
  constructor() {}
  ngOnInit(): void {}
}
