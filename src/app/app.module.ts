import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { TweetFormComponent } from './homepage/tweet-form/tweet-form.component';
import {FormsModule} from "@angular/forms";
import { PostListComponent } from './homepage/post-list/post-list.component';
import { PostComponent } from './homepage/post-list/post/post.component';
import { ReplyComponent } from './homepage/reply/reply.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    TweetFormComponent,
    PostListComponent,
    PostComponent,
    ReplyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
