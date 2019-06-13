import { Component, Input, OnInit } from '@angular/core';
import { Event } from './event';
import { events } from './eventsdata';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from './user';

@Component({
  selector: 'app-infocard',
  templateUrl: './infocard.component.html',
})
export class InfocardComponent implements OnInit{ 
  joined = false;
  eventsList = events;
  id: number;
  event: Event;
  currentUser = new User(5, "Current", "User", "Dallas");

  constructor(private route: Router, private dataRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.id = this.dataRoute.snapshot.params['id'];
    this.event = this.eventsList.find(item => item.id == this.id);
    if(this.event.attendees.filter(item => item.id == this.currentUser.id).length != 0) {
      this.joined = true;
    }
  }

  join() {
    this.joined = true;
    this.eventsList.find(item => item.id === this.event.id).attendees.push(this.currentUser);
  }

}
