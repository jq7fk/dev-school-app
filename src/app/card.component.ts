import { Component } from '@angular/core';
import { Event} from './event';
import { User } from './user'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
})
export class CardComponent {
  visible=false;
  currentUser = new User(1, "current", "user", "Dallas");

  join() {
    this.visible = true;
    // add current user to array of event attendees
    // update num fins going
  }
}
