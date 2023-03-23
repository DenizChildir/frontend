import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Post, Reply} from "./homepage/models";

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private apiUrl = 'http://localhost:3000/api/posts';
  private postsUrl = `${this.apiUrl}/posts`;
  private repliesUrl = `${this.apiUrl}/replies`;

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


  createReply(postId: number, userName: string, title: string, postText: string, image: string | null): Observable<Reply> {
    const newReply: Reply = {
      id: 0, // Assuming the server will assign a proper ID
      tweetId: postId,
      userName: userName,
      title: title,
      postText: postText,
      image: image,
      date: new Date().toISOString(),
    };

    return this.http.post<Reply>(`http://localhost:3000/api/posts/${postId}/replies`, newReply);
  }



  updateReply(postId: number, replyId: number, reply: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${postId}/replies/${replyId}`, reply);
  }

  deleteReply(postId: number, replyId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${postId}/replies/${replyId}`);
  }
  addReply(postId: number, replyText: string): Observable<Reply> {
    const reply: { date: string; image: null; postText: string; id: number; userName: string; title: string; tweetId: number } = {
      id: 0, // Remove this line if your backend generates the ID
      tweetId: postId,
      userName: 'Anonymous', // Replace this with the actual user's name
      title: 'Reply Title', // Replace with an actual title if needed
      postText: replyText,
      image: null,
      date: new Date().toISOString(),
    };

    return this.http.post<Reply>(this.repliesUrl, reply);
  }

}
