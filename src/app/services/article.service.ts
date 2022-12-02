import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Article } from 'src/Article';
import { Observable, of } from 'rxjs';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  constructor() {}
  async getArticles(): Promise<Article[]> {
    return await (await axios(this.apiUrl)).data;
  }
}
