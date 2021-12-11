import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Board } from '../models/board.model';
import { Column } from '../models/column.model';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  board: Board = new Board('Test', [

    new Column('Ideas', [
      'some random1',
      'some random2',
      'some random3'
    ]),
    new Column('research', [
      'some random1',
      'some random2',
      'some random3'
    ]),
    new Column('restodoearch', [
      'some random1',
      'some random2',
      'some random3'
    ])
  ]);

  ngOnInit(): void { }  

  drop(event: CdkDragDrop<string[]>) {
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
