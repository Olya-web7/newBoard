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
        { text: 'sample task' }
    ] },
    {
      id: 2, title: 'To do', list: [
        { text: 'sample task' },
        { text: 'sample task' },
        { text: 'sample task' }
    ] },
    { id: 3, title: 'To improve', list: [
      { text: 'sample task' },
        { text: 'sample task' },
        { text: 'sample task' }
    ] },
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
    this.board.push(newColumn);
    this.board$.next([...this.board]);
  }

  addCard(text: string, columnId: number) {}
  
}
