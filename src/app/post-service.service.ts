import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Post, Reply} from "./homepage/models";
import {delay} from "rxjs/operators";
import { of } from 'rxjs';
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

  // createPost(post: any): Observable<any> {
  //   return this.http.post(this.apiUrl, post);
  // }

  createPost(postText: string, imageBase64: string | null): Observable<Post> {
    const newPost: Post = {
      id: Math.floor(Math.random() * 10000), // Generate a random ID for the mock post
      userName: 'John Doe', // Set the correct userName here
      title: 'New Post',
      postText: postText,
      image: imageBase64,
      date: new Date().toISOString(),
      replies: [],
    };

    console.log('Creating mock post:', newPost);

    // Return the new post data wrapped in an Observable with a simulated delay
    return of(newPost).pipe(delay(500));
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
  addReply(postId: number, replyText: string): Observable<Reply> {
    const reply: Reply = {
      id: Date.now(), // Remove this line if your backend generates the ID
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
