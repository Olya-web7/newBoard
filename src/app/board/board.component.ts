import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { BoardService } from '../board.service';
import { Card, Column } from '../models/models';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  board!: Column[]

  constructor(
    public boardService: BoardService,
    public auth: AuthService
  ) { }

  ngOnInit() {}

  onAddCard(text: string, columnId: number) {
    if (text) {
      this.boardService.addCard(text, columnId)
    }
  }

  onDeleteCard(cardId: number, columnId: any) {
    this.boardService.deleteCard(cardId, columnId)
  }

  onAddLike(event: { card: Card }, columnId: number) {
    const {card: {id}} = event
    this.boardService.addLike(id, columnId)
  }

  onAddComment(event: { id: number, text: string }, columnId: number) {
    this.boardService.addComment(columnId, event.id, event.text)
  } 

  drop(event: CdkDragDrop<Card[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

}
