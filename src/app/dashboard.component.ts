import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { events } from './eventsdata';
import { Event } from './event';
import { User } from './user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
    eventsList = events;
    joinedList = [];
    currentUser = new User(5, "Current", "User", "Dallas");

    constructor(private route:Router) {
      
    }

    ngOnInit() {
      if(localStorage.getItem('events') != null) {
        this.eventsList = JSON.parse(localStorage.getItem('events'));
      }
      this.eventsList.sort(function(a, b) {
        if(a.id < b.id) return 1;
        else if(a.id > b.id) return -1;
        else return 0;
      });
      this.eventsList.forEach(item => {
        if(item.attendees.filter(person => person.id == this.currentUser.id).length != 0) {
          this.joinedList.push(true);
        }
        else this.joinedList.push(false);
    });
  }

  create() {
    this.route.navigate(['/addEvent']);
  }
}