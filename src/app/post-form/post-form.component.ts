import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Post } from '../post';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  post: Post;
  addInputTitle: string;
  addInputThought: string;
  @Output() submitted = new EventEmitter<Post>();

  constructor() { }

  ngOnInit(): void {
    this.post = {title: '', thought: ''};
  }

  submitPost() { 
    const newPost: Post = { 
      title: this.addInputTitle,
      thought: this.addInputThought,
    };
    this.submitted.emit(newPost);
  }


}
