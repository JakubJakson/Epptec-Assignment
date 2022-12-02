import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from 'src/User';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUserUrl = 'https://jsonplaceholder.typicode.com/users';
  async getUserName(): Promise<User[]> {
    return await (await axios.get(this.apiUserUrl)).data;
  }
}
