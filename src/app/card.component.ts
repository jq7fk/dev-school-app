import { Component, Input, OnInit } from '@angular/core';
import { Event} from './event';
import { User } from './user'
import { events } from './eventsdata';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
})
export class CardComponent implements OnInit {
  @Input() event: Event;
  @Input() joined: boolean;

  eventsList = events;
  currentUser = new User(5, "Current", "User", "Dallas");

  constructor(private route: Router) {
  }

  ngOnInit() {
  }

  join() {
    this.joined = true;
    this.eventsList.find(item => item.id === this.event.id).attendees.push(this.currentUser);
  }

  commentsClick() {
    this.route.navigate(['/details', this.event.id]);
  }
}
