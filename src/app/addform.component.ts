import { Component, OnInit } from '@angular/core';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { Time } from '@angular/common';
import { Event } from './event';
import { NgModel, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from './user';
import { events } from './eventsdata';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addform',
  templateUrl: './addform.component.html',
})
export class AddformComponent implements OnInit {
  //hardcoded users
  user = new User(1, 'Edmund', 'Pan', 'Houston');
  user1 = new User(1, 'Jennifer', 'Qian', 'D.C.');
  user2 = new User(1, 'Matt', 'Damon', 'Houston');
  user3 = new User(1, 'Chris', 'Pratt', 'Houston');
  going = [this.user1, this.user2, this.user3];
  nocomments = [];
  model = new Event(1, '', '', '', '', this.user , this.going, this.nocomments, '', '');
  submitted = false;
  addForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private route: Router) {

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
    

}
