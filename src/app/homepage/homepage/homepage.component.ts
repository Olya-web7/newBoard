import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Card, Column } from '../../models/models';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';
import { HomepageService } from '../homepage.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  board: Column[] = [];
  favorite = JSON.parse(localStorage.getItem('favorite') as string);

  constructor(
    private router: Router,
    public auth: AuthService,
    public homepageService: HomepageService
  ) { } 

  ngOnInit() {
    // this.board = JSON.parse(localStorage.getItem('board') as string);
  }

  addColumn(event: string) {
    if (event) {
      this.homepageService.addColumn(event);
    }
  }

  deleteColumn(id: number, column: Column) {
    let confirmed = confirm(`Do you really want to delete the column ${column.title}?`);
    if (confirmed) {
      this.homepageService.deleteColumn(id);
    }
  }

  onAddCard(text: string, columnId: number) {
    if (text) {
      this.homepageService.addTask(text, columnId);
    }
  }

    onAddComment(event: { id: number, text: string }, columnId: number) {
    this.homepageService.addComment(columnId, event.id, event.text)
  }

  logout(event: Event) {
    event.preventDefault();
    this.auth.logout();
    this.router.navigate(['/login']);
  }

  drop(event: CdkDragDrop<any[]>) {
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
