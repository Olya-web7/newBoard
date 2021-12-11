import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Board } from '../models/board.model';
import { Column } from '../models/column.model';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { HomepageService } from './homepage.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor(
    private router: Router,
    public auth: AuthService,
    public homepageService: HomepageService,

  ) { }

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
    ])
  ]);

  ngOnInit(): void { }  

  addColumn(event: string) {
    if (event) {
      // this.homepageService.addColumn(event)
    }
  }

  logout(event: Event) {
    event.preventDefault();
    this.auth.logout();
    this.router.navigate(['/login']);
  }

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
