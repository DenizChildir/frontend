import { Component } from '@angular/core';

@Component({
  selector: 'app-tweet-form',
  templateUrl: './tweet-form.component.html',
  styleUrls: ['./tweet-form.component.css']
})
export class TweetFormComponent {
  name?: string;
  title?: string;
  message?: string;
  image?: string;

  onSubmit() {
    // Handle form submission
  }

  onImageSelected(event: Event) {
    const target = event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];
    // Handle image selection
  }
}
