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
  going = [] 
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
    this.going = this.event.attendees;
  }

  join() {
    this.joined = true;
    this.eventsList.find(item => item.id === this.event.id).attendees.push(this.currentUser);
  }

}
