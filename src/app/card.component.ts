import { Component, Input } from '@angular/core';
import { Event} from './event';
import { User } from './user'
import { events } from './eventsdata';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
})
export class CardComponent {
  @Input() event: Event;

  visible=false;
  eventsList = events;
  currentUser = new User(5, "Current", "User", "Dallas");

  join() {
    this.visible = true;
    // add current user to array of event attendees
    this.eventsList.find(item => item.id === this.event.id).attendees.push(this.currentUser);
    console.log(this.eventsList.find(item => item.id === this.event.id).attendees);
    // update num fins going
  }
}
