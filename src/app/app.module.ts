import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { TweetFormComponent } from './homepage/tweet-form/tweet-form.component';
import {FormsModule} from "@angular/forms";
import { PostListComponent } from './homepage/post-list/post-list.component';
import { PostComponent } from './homepage/post-list/post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    TweetFormComponent,
    PostListComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
