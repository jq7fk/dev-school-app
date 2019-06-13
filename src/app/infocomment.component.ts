import { Component, Input } from '@angular/core';
import { Comment } from './comment';

@Component({
  selector: 'app-infocomment',
  templateUrl: './infocomment.component.html',
})
export class InfocommentComponent {
  @Input() comment: Comment;

}
