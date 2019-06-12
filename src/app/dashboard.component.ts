import { Component, Output, EventEmitter } from '@angular/core';
import { events } from './eventsdata';
import { Event } from './event';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
    eventsList = events;
}