import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Card, Column } from './models/models';

@Injectable({providedIn: 'root'})
export class BoardService {

  private initBoard = [
    { id: 1, title: 'Went well', color: '#009785', list: [] },
    { id: 2, title: 'To do', color: '#912f84', list: [] },
    { id: 3, title: 'To improve', color: '#e82b63', list: [] },
  ]
  private board: Column[] = this.initBoard
  private board$ = new BehaviorSubject<Column[]>(this.initBoard)

  getBoard$() {
    return this.board$.asObservable();
  } 

  addColumn(title: string) {
    let newColumn: Column = {
      id: Date.now(),
      title: title,
      list: [],
    };
    if (localStorage.getItem('board') == null) {
      this.board = [...this.board, newColumn];
      localStorage.setItem('board', JSON.stringify(this.board));
    } else {
      this.board = JSON.parse(localStorage.getItem('board') as string);
      this.board = [...this.board, newColumn];
      localStorage.setItem('board', JSON.stringify(this.board));
    }    
    this.board$.next([...this.board]);
  }

  addCard(text: string, columnId: number) {
    let newCard: Card = {
      id: Date.now(),
      text,
      like: 0,
      comments: [],
    };
    localStorage.setItem('Card', JSON.stringify(newCard));
    this.board = this.board.map((column: Column) => {
      if (column.id === columnId) {
        newCard = JSON.parse(localStorage.getItem('Card') as string);
        column.list = [...column.list, newCard];
      }
      return column;
    });
    this.board$.next([...this.board]);
  }

  deleteCard(cardId: number, columnId: number) {
    this.board = this.board.map((column: Column) => {
      if (column.id === columnId) {
        column.list = column.list.filter((card: Card) => card.id !== cardId);
        localStorage.removeItem('Card');
      }
      return column;
    });
    this.board$.next([...this.board]);
  }

  addLike(cardId: number, columnId: number) {
    this.board = this.board.map((column: Column) => {
      if (column.id === columnId) {
        let list = column.list.map((card: Card) => {
          if (card.id === cardId) {
            card.like++
          }
          return card;
        });
        column.list = list;
        return column;
      } else {
        return column;
      }
    });
    this.board$.next([...this.board]);
  }

  addComment(columnId: number, cardId: number, text: string) {
    this.board = this.board.map((column: Column) => {
      if (column.id === columnId) {
        const list = column.list.map((card: Card) => {
          if (card.id === cardId) {
            let newComment = {
              id: Date.now(),
              text,
            };
            card.comments = [newComment, ...card.comments];
            localStorage.setItem('Comment', JSON.stringify(newComment));
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
