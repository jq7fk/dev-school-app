import { Component, OnInit, Input } from '@angular/core';
import { Event } from './event';
import { NgModel } from '@angular/forms';
import { User } from './user';
import { Comment } from './comment';
import { events } from './eventsdata';
import { users } from './usersdata';

@Component({
  selector: 'app-infocard',
  templateUrl: './infocard.component.html',
})
export class InfocardComponent implements OnInit {
  @Input() event: Event;
  @Input() eventsList: Event[];

  currentUser = users[4];
  comment = new Comment(this.currentUser, '');
  joined = false;
  // eventsList = events;
  id: number;
  submitted = false;
  creator = false;
  hover = false;


  ngOnInit() {
    let formatDate = new Date(this.event.date+' '+this.event.time);
    this.event.date = formatDate.toDateString();
    this.event.time = formatDate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

    // if(localStorage.getItem('events') != null) {
    //   this.eventsList = JSON.parse(localStorage.getItem('events'));

    // }

    if (this.event.attendees.filter(person => person.id == this.currentUser.id).length != 0) {
      console.log('here');
      this.joined = true;
    }
    if (this.currentUser == this.event.creator) {
      this.creator = true;

    }

  }

  leave() {
    this.joined = false;
    this.hover = false;
    this.eventsList.forEach(item => {
      var index = item.attendees.indexOf(this.currentUser);
      item.attendees.splice(index, 1);
    });
    localStorage.setItem('events', JSON.stringify(this.eventsList));
  }

  mouseEnter() {
    this.joined = false;
    this.hover = true;
  }

  mouseLeave() {
    this.joined = true;
    this.hover = false;
  }

  join() {
    this.joined = true;
    this.eventsList.find(item => item.id === this.event.id).attendees.push(this.currentUser);
    localStorage.setItem('events', JSON.stringify(this.eventsList));
  }

  newComment() {
    this.event.comments.unshift(this.comment);
    localStorage.setItem('events', JSON.stringify(events));
    this.comment = new Comment(this.currentUser, '');
    this.submitted = true;
  }
}

