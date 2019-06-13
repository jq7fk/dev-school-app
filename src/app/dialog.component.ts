import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
})
export class DialogComponent {
    constructor(public dialogRef: MatDialogRef<DialogComponent>) {
    }

    delete() {
      // input event info here
      // splice from events array
      // route back to /dashboard
    }

    cancel() {
      this.dialogRef.close();
    }
}