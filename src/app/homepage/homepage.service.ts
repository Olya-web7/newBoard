import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Card, Column } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class HomepageService {

  private board!: Column[];
  private board$ = new BehaviorSubject<Column[]>(this.board);

  getBoard$() {
    return this.board$.asObservable()
  }

  getBoard() {
    return JSON.parse(localStorage.getItem('board') as string) || [];
  }

  addColumn(title: string) {
    let newColumn: Column = {
      id: Date.now(),
      title: title,
      list: [],
    };

    this.board = this.getBoard();

    this.board.push(newColumn);
    localStorage.setItem('board', JSON.stringify(this.board));
    this.board$.next([...this.getBoard()]);
  }

  addTask(text: string, id: number) {
    let newTask: Card = {
      id: Date.now(),
      text, 
      comments: [],
    };

    this.board
      .map((column: Column) => {
        if (column.id === id) {
          column.list.push(newTask);
        }
        localStorage.setItem('board', JSON.stringify(this.board));
        return column;
      });
      localStorage.setItem('board', JSON.stringify(this.board));
      this.board$.next([...this.board]);
  } 

  deleteColumn(id: number) {
    this.board = this.board
      .filter((column: Column) => column.id != id);
    localStorage.setItem('board', JSON.stringify(this.board));
    this.board$.next([...this.board]);
  }

  deleteTask(cardId: number, columnId: number) {
    this.board = this.board.map((column: Column) => {
      if (column.id === columnId) {
        column.list = column.list.filter((card: Card) => card.id !== cardId);
      }
      localStorage.setItem('board', JSON.stringify(this.board));
      return column;
    });
    this.board$.next([...this.board]);
  }
  
}
