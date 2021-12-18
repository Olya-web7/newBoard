import { Component, OnInit } from '@angular/core';
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
  board: Column[] = []

  constructor(
    private router: Router,
    public auth: AuthService,
    public homepageService: HomepageService
  ) { } 

  ngOnInit(): void {
  }

  addColumn(event: string) {
    if (event) {
      this.homepageService.addColumn(event);
    }
  }

  deleteColumn(id: any) {
    let confirmed = confirm('r u sure?');
    if (confirmed) {
      this.homepageService.deleteColumn(id);
    }
  }

  logout(event: Event) {
    event.preventDefault();
    this.auth.logout();
    this.router.navigate(['/login']);
  }

  drop(event: CdkDragDrop<Card[]>) {
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
