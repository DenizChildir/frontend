import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Post, Reply} from "../../models";
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  @Input() post!: Post;
  @Output() createReply = new EventEmitter<Reply>();
  @Output() updateReply = new EventEmitter<Reply>();
  @Output() deleteReply = new EventEmitter<number>();
  @Output() updatePost = new EventEmitter<Post>();
  @Output() deletePost = new EventEmitter<number>();

  newReply: Reply = {
    id: 0,
    tweetId: 0,
    userName: '',
    title: '',
    postText: '',
    image: null,
    date: ''
  };

  onCreateReply() {
    this.newReply.tweetId = this.post.id;
    this.createReply.emit(this.newReply);
  }

  onUpdateReply(reply: Reply) {
    this.updateReply.emit(reply);
  }

  onDeleteReply(replyId: number) {
    this.deleteReply.emit(replyId);
  }

  onUpdatePost() {
    this.updatePost.emit(this.post);
  }

  onDeletePost() {
    this.deletePost.emit(this.post.id);
  }
}
