import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Card } from 'src/app/models/models';
import { HomepageService } from '../homepage.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  cards!: Card[]

  @Input() item: any
  @Output() emitText: EventEmitter<{ id: number; text: string }> = new EventEmitter();
  
  @Output() emitCardItem: EventEmitter<{task: Card}> = new EventEmitter();
  @Output() emitDeleteCard: EventEmitter<number> = new EventEmitter();
  commentInput = ''
  open = false;

  constructor(
    public auth: AuthService,
    private homepageService: HomepageService,
  ) { }

  ngOnInit(): void { }

  onOpenComment() {
    this.open = !this.open;
  }

  onCommentTextEmmit(id: number) {
    this.emitText.emit({ id, text: this.commentInput });
    this.commentInput = ''
  }

}
