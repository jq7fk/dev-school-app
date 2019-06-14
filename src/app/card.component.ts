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
  @Input() eventsList: Event[];
  @Input() joined: boolean;

  creator = false;
  // eventsList = events;
  currentUser = users[4];
  hover = false;

  constructor(private route: Router) {
  }

  ngOnInit() {
    //console.log(this.joined);
    let formatDate = new Date(this.event.date+' '+this.event.time);
    this.event.date = formatDate.toDateString();
    this.event.time = formatDate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })

    if (this.currentUser.id == this.event.creator.id) {
      this.creator = true;
    }
  }

  join() {
    this.joined = true;
    this.eventsList.find(item => item.id == this.event.id).attendees.push(this.currentUser);
    console.log(this.eventsList.find(item => item.id == this.event.id).attendees);
    localStorage.setItem('events', JSON.stringify(this.eventsList));
    // console.log(localStorage);
  }

  leave() {
    this.joined = false;
    this.hover = false;
    this.eventsList.find(item => {
      if(item.id == this.event.id) {
        var index = item.attendees.indexOf(this.currentUser);
        item.attendees.splice(index, 1);
      }
      console.log(item.attendees);
    });
    // this.eventsList.forEach(item => {
    //   var index = item.attendees.indexOf(this.currentUser);
    //   item.attendees.splice(index, 1);
    //   console.log(item.attendees);
    // });
    localStorage.setItem('events', JSON.stringify(this.eventsList));
    console.log(localStorage);
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
