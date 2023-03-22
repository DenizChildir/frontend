import {Component, OnInit} from '@angular/core';
import {PostService} from "../post-service.service";
import { Post, Reply } from './models';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  posts: Post[] = [];
  // Add this line to the AppComponent class
  //newPost: Partial<Post> = {};

// With this line

  onFileSelected(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      const file = inputElement.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.newPost.image = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  newPost: Post = {
    id: 0,
    userName: '',
    title: '',
    postText: '',
    image: null,
    date: '',
    replies: [],
  };

  constructor(private postService: PostService) {}

  // ngOnInit(): void {
  //   this.loadPosts();
  // }

  ngOnInit() {
    this.fetchPosts();
  }

  fetchPosts() {
    this.postService.getPosts().subscribe(
      (data: Post[]) => {
        this.posts = data;
      },
      (error) => {
        console.error('Error fetching posts:', error);
      }
    );
  }

  loadPosts(): void {
    this.postService.getPosts().subscribe((posts: Post[]) => {
      this.posts = posts;
    });
  }

  createPost(post: Post): void {
    this.postService.createPost(post).subscribe((newPost: Post) => {
      this.posts.push(newPost);
    });
  }

  updatePost(post: Post): void {
    this.postService.updatePost(post.id, post).subscribe((updatedPost: Post) => {
      const index = this.posts.findIndex((p) => p.id === updatedPost.id);
      this.posts[index] = updatedPost;
    });
  }

  deletePost(postId: number): void {
    this.postService.deletePost(postId).subscribe(() => {
      this.posts = this.posts.filter((post) => post.id !== postId);
    });
  }

  createReply(postId: number, reply: Reply): void {
    this.postService.createReply(postId, reply).subscribe((newReply: Reply) => {
      const postIndex = this.posts.findIndex((post) => post.id === postId);
      if (postIndex !== -1) {
        this.posts[postIndex].replies.push(newReply);
      }
    });
  }

  updateReply(postId: number, reply: Reply): void {
    this.postService.updateReply(postId, reply.id, reply).subscribe((updatedReply: Reply) => {
      const postIndex = this.posts.findIndex((post) => post.id === postId);
      if (postIndex !== -1) {
        const replyIndex = this.posts[postIndex].replies.findIndex((r) => r.id === updatedReply.id);
        this.posts[postIndex].replies[replyIndex] = updatedReply;
      }
    });
  }

  deleteReply(postId: number, replyId: number): void {
    this.postService.deleteReply(postId, replyId).subscribe(() => {
      const postIndex = this.posts.findIndex((post) => post.id === postId);
      if (postIndex !== -1) {
        this.posts[postIndex].replies = this.posts[postIndex].replies.filter((reply) => reply.id !== replyId);
      }
    });
  }
}

  /*
  posts = [
    // ...
    {
      id: 3,
      userName: 'BobSmith',
      title: 'A cool event',
      postText: 'I attended a really cool event last weekend.',
      image: null,
      date: '2023-03-19T19:15:00',
      replies: [
        {
          id: 1,
          tweetId: 3,
          userName: 'JaneDoe',
          title: 'Sounds fun!',
          postText: 'I wish I could have attended too!',
          image: null,
          date: '2023-03-19T20:05:00',
        },
        {
          id: 2,
          tweetId: 3,
          userName: 'JohnDoe',
          title: 'Great!',
          postText: 'What was your favorite part of the event?',
          image: null,
          date: '2023-03-19T21:30:00',
        },
      ],
    },
  ];

   */

