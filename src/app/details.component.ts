import { Component, OnInit } from '@angular/core';
import { events } from './eventsdata';
import { Event } from './event';
import { User } from './user';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
})
export class DetailsComponent implements OnInit {
    eventsList = events;
    id: number;
    event: Event;
    user = new User(1, 'Edmund', 'Pan', 'Houston');
    joined = false;

    constructor(private route: Router, private dataRoute: ActivatedRoute) {

    }

    ngOnInit() {
        this.id = this.dataRoute.snapshot.params['id'];
        if(localStorage.getItem('events') != null) {
            this.eventsList = JSON.parse(localStorage.getItem('events'));
        }
        this.event = this.eventsList.find(item => item.id == this.id);
        if(this.event.attendees.filter(item => item.id == this.user.id).length != 0) {
            this.joined = true;
        }

        window.onbeforeunload = (ev) => {
            localStorage.setItem('events', JSON.stringify(this.eventsList));
        }
    }

    
}
