import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { events } from './eventsdata';
import { Event } from './event';
import { User } from './user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
    eventsList = events;
    joinedList = [];
    currentUser = new User(5, "Current", "User", "Dallas");

    ngOnInit() {
      this.eventsList.forEach(item => {
        if(item.attendees.filter(person => person.id == this.currentUser.id).length != 0) {
          this.joinedList.push(true);
        }
        else this.joinedList.push(false);
    });
  }
}