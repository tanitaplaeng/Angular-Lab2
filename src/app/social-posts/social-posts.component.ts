import { Component, OnInit } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css']
})
export class SocialPostsComponent implements OnInit {
  
  posts: Post[];
  thoughtForm = false;

  constructor() { }

  ngOnInit(): void {
    this.posts = [
      {title: 'Worlds Largest Egg', thought: 'Its shell shockingly large!'},
      {title: 'How many is too many cats?', thought: 'Im convinced the limit does not exist...'},
      {title: '21 Sexy Ways To Eat Spam', thought: 'This was an actual post on Tasty and I dont wanna talk about it.'}
    ];
  }

  onDelete(post: Post) { 
    const itemIndex = this.posts.indexOf(post);
    this.posts.splice(itemIndex, 1);
  };

  onSubmit(item: Post) { 
    this.posts.push(item);
  }

  onToggleThought() { 
    this.thoughtForm = !this.thoughtForm; 
  }

}
