import {Component, Input} from '@angular/core';
import {Post,Reply} from "../models";
import {PostService} from "../../post-service.service";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
  @Input() posts: Array<any> | undefined;
}

