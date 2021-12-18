import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Card, Column } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class HomepageService {

  private initBoard = [
    { id: 1, title: 'Went well', list: [] },
    { id: 2, title: 'To do', list: [] }
  ]
  private board: Column[] = [...this.initBoard];
  private board$ = new BehaviorSubject<Column[]>(this.board);

  getBoard$() {
    return this.board$.asObservable()
  }

  initialBoard() {
    return localStorage.setItem('board', JSON.stringify(this.initBoard));
  }

  getBoard() {
    return JSON.parse(localStorage.getItem('board') as string);
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
    this.board$.next([...this.board]);
  }

  deleteColumn(id: any) {
    this.board = this.board
      .filter((column: Column) => column.id != id);
    localStorage.setItem('board', JSON.stringify(this.board));
    this.board$.next([...this.board]);
  }

  addTask(text: string, id: number) {
    let newTask: any = {
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
      this.board$.next([...this.board]);
  } 

  deleteCard(cardId: number, columnId: number) {
    this.board = this.board.map((column: Column) => {
      if (column.id === columnId) {
        column.list = column.list.filter((card: Card) => card.id != cardId);
      }
      localStorage.setItem('board', JSON.stringify(this.board));
      return column;
    });
    this.board$.next([...this.board]);
  }
  
}
