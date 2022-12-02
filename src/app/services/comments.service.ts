import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Comment } from 'src/Comment';
import { Observable, of } from 'rxjs';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  private apiCommentUrl = 'https://jsonplaceholder.typicode.com/comments';
  constructor(private httpComment: HttpClient) {}
  async getComments(): Promise<Comment[]> {
    return await (
      await axios(this.apiCommentUrl)
    ).data;
  }
}
