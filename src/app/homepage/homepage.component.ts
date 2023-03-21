import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
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
}
