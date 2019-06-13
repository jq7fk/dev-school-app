import { Component, Input, OnInit } from '@angular/core';
import { Event} from './event';
import { User } from './user'
import { events } from './eventsdata';
import { Router } from '@angular/router';
import { users } from './usersdata';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
})
export class CardComponent implements OnInit {
  @Input() event: Event;
  @Input() joined: boolean;

  creator = false;
  eventsList = events;
  currentUser = users[4];
  hover = false;

  constructor(private route: Router) {
  }

  ngOnInit() {
    if (this.currentUser == this.event.creator) {
      this.creator = true;
    }
  }

  join() {
    this.joined = true;
    this.eventsList.find(item => item.id === this.event.id).attendees.push(this.currentUser);
  }

  leave() {
    this.joined = false;
    this.hover = false;
    this.eventsList.forEach(item => {
      var index = item.attendees.indexOf(this.currentUser);
      item.attendees.splice(index, 1);
    });
  }

  mouseEnter() {
    this.joined = false;
    this.hover = true;
  }

  mouseLeave() {
    this.joined = true;
    this.hover = false;
  }

  editClick() {
    this.route.navigate(['/editEvent', this.event.id]);
  }

  commentsClick() {
    this.route.navigate(['/details', this.event.id]);
  }
}
