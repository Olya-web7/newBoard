import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Card, Column } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class HomepageService {

  private initBoard = [
    {
      id: 1, title: 'Went well', list: [
      {text: 'sample task'}
    ] },
    { id: 2, title: 'To do', list: [] },
    { id: 3, title: 'To improve', list: [] },
  ]
  private board: Column[] = this.initBoard
  private board$ = new BehaviorSubject<Column[]>(this.initBoard)

  getBoard() {
    return this.board$.asObservable();
    // return JSON.parse(localStorage.getItem('board') as string);
  } 

  addColumn(title: string) {
    let newColumn: Column = {
      title: title,
      list: [],
    };
    this.board = [...this.board, newColumn];
    localStorage.setItem('board', JSON.stringify(this.board));
    this.board$.next([...this.board]);
  }

  addCard(text: string, columnId: number) {
    
  }
  
  deleteCard(cardId: number, columnId: number) {}
  
  addLike(cardId: number, columnId: number) {}
  
  addComment(columnId: number, cardId: number, text: string) { 
    this.board = this.board.map((column: Column) => {
      if (column.id === columnId) {
        const list = column.list.map((card: Card) => {
          if (card.id === cardId) {
            let newComment = {
              id: Date.now(),
              text,
            };
            card.comments?.push(newComment);
            localStorage.setItem('Comment', JSON.stringify(card.comments));
          }
          return card;
        });
        column.list = list;
      }
      return column;
    });
    this.board$.next([...this.board]);
  }
  
}
