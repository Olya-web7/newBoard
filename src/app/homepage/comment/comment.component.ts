import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Comment } from '../../models/models';
  
@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  @Input() comment!: Comment;
  @Output() emitComment: EventEmitter<Comment> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onCommentEmit(comment: Comment) {
    this.emitComment.emit(comment);
  }

}
