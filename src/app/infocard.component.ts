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

  currentUser = new User(5, "Current", "User", "Dallas");
  comment = new Comment(this.currentUser, '');
  joined = false;
  eventsList = events;
  id: number;
  submitted = false;

  ngOnInit() {
    if(this.event.attendees.filter(person => person.id == this.currentUser.id).length != 0) {
      console.log('here');
      this.joined = true;
    }
  }

  join() {
    this.joined = true;
    this.eventsList.find(item => item.id === this.event.id).attendees.push(this.currentUser);
  }

  newComment() {
    this.event.comments.unshift(this.comment);
    this.comment = new Comment(this.currentUser, '');
    this.submitted = true;
  }
}

