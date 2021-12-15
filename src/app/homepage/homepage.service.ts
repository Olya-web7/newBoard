import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Column } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class HomepageService {

  private initBoard = [
    { id: 1, title: 'Went well', list: [] },
    { id: 2, title: 'To do', list: [] },
    { id: 3, title: 'To improve', list: [] },
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
    this.board = [...this.board, newColumn];
    this.board$.next([...this.board]);
  }

  addCard(text: string, columnId: number) {}
  deleteCard(cardId: number, columnId: number) {}
  addLike(cardId: number, columnId: number) {}
  addComment(){}
}
