import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  posts = [
    {
      id: 1,
      userName: 'JohnDoe',
      title: 'My first post',
      postText: 'Hello, this is my first post on this platform!',
      image: null,
      date: '2023-03-21T10:30:00',
    },
    {
      id: 2,
      userName: 'JaneDoe',
      title: 'My amazing trip',
      postText: 'I just got back from an amazing trip to Europe!',
      image: 'data:image/png;base64,iVBORw0KGg...', // Shortened base64 for brevity
      date: '2023-03-20T14:45:00',
    },
    {
      id: 3,
      userName: 'BobSmith',
      title: 'A cool event',
      postText: 'I attended a really cool event last weekend.',
      image: null,
      date: '2023-03-19T19:15:00',
    },
  ];
}
