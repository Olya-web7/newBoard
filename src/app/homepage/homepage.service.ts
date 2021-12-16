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
        { text: 'sample task' }, 
    ] },
    {
      id: 2, title: 'To do', list: [
        { text: 'sample task' },
        { text: 'sample task' },
    ] }
  ]
  private board: Column[] = this.initBoard
  private board$ = new BehaviorSubject<Column[]>(this.initBoard)

  getBoard$() {
    return this.board$.asObservable();
  } 

  getBoard() {
    return JSON.parse(localStorage.getItem('board') as string);
  }

  addColumn(title: string) {
    let newColumn: Column = {
      id: new Date(),
      title: title,
      list: [],
    };
    const board = this.getBoard();
    board.push(newColumn);
    localStorage.setItem('board', JSON.stringify(board) as string)
    this.board$.next([...board]);
  }

  addCard(text: string, columnId: number) {}  
  
}
