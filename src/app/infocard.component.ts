import { Component, OnInit, Input } from '@angular/core';
import { Event } from './event';
import { NgModel } from '@angular/forms';
import { User } from './user';
import { Comment } from './comment';
import { events } from './eventsdata';

@Component({
  selector: 'app-infocard',
  templateUrl: './infocard.component.html',
})
export class InfocardComponent implements OnInit {
  @Input() event: Event;

  user = new User(1, 'Edmund', 'Pan', 'Houston');
  comment = new Comment(this.user, '');
  joined = false;
  eventsList = events;
  id: number;
  submitted = false;

  ngOnInit() {
    console.log(this.event);
  }

  join() {
    this.joined = true;
    this.eventsList.find(item => item.id === this.event.id).attendees.push(this.user);
  }

  newComment() {
    this.event.comments.unshift(this.comment);
    this.comment = new Comment(this.user, '');
    this.submitted = true;
  }
}

