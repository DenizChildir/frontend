import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Reply} from "../models";

@Component({
  selector: 'app-reply',
  templateUrl: './reply.component.html',
  styleUrls: ['./reply.component.css']
})
export class ReplyComponent implements OnInit {
  @Input() reply: Reply = {
    id: 0,
    tweetId: 0,
    userName: '',
    title: '',
    postText: '',
    image: null,
    date: new Date().toISOString(),
  };

  @Output() deleteReply = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  onDeleteReply() {
    this.deleteReply.emit(this.reply.id);
  }
}
