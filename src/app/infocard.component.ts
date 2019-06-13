import { Component } from '@angular/core';
import { Event } from './event';
import { NgModel } from '@angular/forms';
import { User } from './user';
import { Comment } from './comment';

@Component({
  selector: 'app-infocard',
  templateUrl: './infocard.component.html',
})
export class InfocardComponent {
  user = new User(1, 'Edmund', 'Pan', 'Houston');
  comment = new Comment(this.user, '');

  submitted = false;
  newComment() {
    console.log(this.comment.content);
    this.comment = new Comment(this.user, '');
    this.submitted = true;
  }
}

