import { Component, OnInit, Input } from '@angular/core';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { Time } from '@angular/common';
import { Event } from './event';
import { NgModel, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from './user';
import { events } from './eventsdata';
import { Router, ActivatedRoute } from '@angular/router';
import { users } from './usersdata';

@Component({
  selector: 'app-addform',
  templateUrl: './addform.component.html',
})
export class AddformComponent implements OnInit {
  //hardcoded users
  user = users[4];
  user0 = new User(1, 'Edmund', 'Pan', 'Houston');
  user1 = new User(1, 'Jennifer', 'Qian', 'D.C.');
  user2 = new User(1, 'Matt', 'Damon', 'Houston');
  user3 = new User(1, 'Chris', 'Pratt', 'Houston');
  going = [this.user1, this.user2, this.user3];
  nocomments = [];
  model = new Event(1, '', '', '', '', this.user , this.going, this.nocomments, '', '');
  submitted = false;
  addForm: FormGroup;
  edit = false;
  id: number;
  eventsList = events;

  constructor(private formBuilder: FormBuilder, private route: Router, private dataRoute: ActivatedRoute) {

  }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      title: ['', Validators.required],
      location: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
      description: [''],
      imageUrl: ['', Validators.required]
    });
    if(this.dataRoute.snapshot.params['id']) {
      this.edit = true;
      this.id = this.dataRoute.snapshot.params['id'];
      this.model = this.eventsList.find(item => item.id == this.id);
    }
  }

  get f() {
    return this.addForm.controls;
  }

  newEvent() {
    this.submitted = true;
    if(this.addForm.valid) {
      events.sort(function(a, b) {
        if(a.id < b.id) return -1;
        if(a.id > b.id) return 1;
        else return 0;
      });
      var index = events[events.length - 1].id;
      this.model.id = index + 1;
      events.push(this.model);
      this.model = new Event(1, '', '', '', '', this.user , this.going, this.nocomments, '', '');
      this.route.navigate(['/dashboard']);
    }
    }
  
  delete() {
    var index = this.eventsList.indexOf(this.model);
    this.eventsList.splice(index, 1);
  }
}
