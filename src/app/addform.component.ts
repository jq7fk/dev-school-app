import { Component } from '@angular/core';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { Time } from '@angular/common';
import { Event } from './event';
import { NgModel } from '@angular/forms';
import { User } from './user';
import { events } from './eventsdata';

@Component({
  selector: 'app-addform',
  templateUrl: './addform.component.html',
})
export class AddformComponent {
  //hardcoded users
  user = new User(1, 'Edmund', 'Pan', 'Houston');
  user1 = new User(1, 'Jennifer', 'Qian', 'D.C.');
  user2 = new User(1, 'Matt', 'Damon', 'Houston');
  user3 = new User(1, 'Chris', 'Pratt', 'Houston');
  going = [this.user1, this.user2, this.user3];
  model = new Event(null, '', '', '', '', this.user , this.going, '', '');
  submitted = false;
  newEvent() {
    events.sort(function(a, b) {
      if(a.id < b.id) return -1;
      if(a.id > b.id) return 1;
      else return 0;
    });
    var index = events[events.length - 1].id;
    this.model.id = index + 1;
    events.push(this.model);
    this.model = new Event(null, '', '', '', '', this.user , this.going, '', '');
    this.submitted = true; 
  }

}
