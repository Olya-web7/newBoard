import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Card } from 'src/app/models/models';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  cards!: Card[]
  favorite = [];

  @Input() item!: Card;
  @Output() emitText: EventEmitter<{ id: number; text: string }> = new EventEmitter();

  commentInput = ''
  open = false;
  fav = false;

  constructor(
    public auth: AuthService,
  ) { }

  ngOnInit() {
    // this.favorite = JSON.parse(localStorage.getItem('favorite') as string);
  }
  
  addFavorite(item: Card) {
    const favorite = this.getFavorite();
    favorite.push(item);
    this.fav = true;
    localStorage.setItem('favorite', JSON.stringify(favorite));
  }

  getFavorite() {
    return JSON.parse(localStorage.getItem('favorite') as string) || [];
  }

  onOpenComment() {
    this.open = !this.open;
  }

  onCommentTextEmmit(id: number) {
    this.emitText.emit({ id, text: this.commentInput });
    this.commentInput = ''
  }

}
