import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Post} from "./homepage/models";

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private apiUrl = 'http://localhost:3000/api/posts';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl);
  }

  createPost(post: any): Observable<any> {
    return this.http.post(this.apiUrl, post);
  }

  updatePost(id: number, post: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, post);
  }

  deletePost(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  createReply(postId: number, reply: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/${postId}/replies`, reply);
  }

  updateReply(postId: number, replyId: number, reply: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${postId}/replies/${replyId}`, reply);
  }

  deleteReply(postId: number, replyId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${postId}/replies/${replyId}`);
  }
}
