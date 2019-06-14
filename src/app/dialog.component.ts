import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Event } from './event';
import { events } from './eventsdata';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
})
export class DialogComponent {
    eventsList = events;

    constructor(public dialogRef: MatDialogRef<DialogComponent>, @Inject(MAT_DIALOG_DATA) public event: Event,
      private route: Router) {
    }

    delete() {
      var index = this.eventsList.indexOf(this.event['event']);
      this.eventsList.splice(index, 1);
      localStorage.setItem('events', JSON.stringify(events));
      this.route.navigate(['/dashboard']);
      this.dialogRef.close();
    }

    cancel() {
      this.dialogRef.close();
    }
}