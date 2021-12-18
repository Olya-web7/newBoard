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
        { text: 'sample task' },
    ] },
    {
      id: 2, title: 'To do', list: [
        { text: 'sample task' },
        { text: 'sample task' },
    ] }
  ]
  private board: Column[] = this.initBoard

  getBoard() {
    return JSON.parse(localStorage.getItem('board') as string) || [];
  }

  addColumn(title: string) {
    let newColumn: Column = {
      id: Date.now(),
      title: title,
      list: [],
    };

    this.board = [...this.getBoard(), newColumn];
    localStorage.setItem('board', JSON.stringify(this.board));
    // this.board$.next([...this.getBoard()]);
  }

  deleteColumn(id: any) {
    const board = this.getBoard()
      .filter((column: Column) => column.id != id);
    localStorage.setItem('board', JSON.stringify(board));
  }

  addCard(text: string, columnId: number) { } 
  
}
