import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {Reply} from "../models";

@Component({
  selector: 'app-reply',
  templateUrl: './reply.component.html',
  styleUrls: ['./reply.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ReplyComponent implements OnInit {
  // @Input() reply: Reply = {
  //   id: 0,
  //   tweetId: 0,
  //   userName: '',
  //   title: '',
  //   postText: '',
  //   image: null,
  //   date: new Date().toISOString(),
  // };
  @Input() reply!: Reply;
  @Output() deleteReplyEvent = new EventEmitter<number>();

  @Output() deleteReply = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  onDeleteReply(replyId: number) {
    this.deleteReplyEvent.emit(replyId);
  }
}
