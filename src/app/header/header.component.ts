import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { BoardService } from '../board.service';
import { Column } from '../models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  column!: Column;
  board!: Column[]

  constructor(
    public boardService: BoardService,
    private router: Router,
    public auth: AuthService
  ) { }

  ngOnInit() {
  }

  addColumn(event: string) {
    if (event) {
      this.boardService.addColumn(event)
    }
  }

  logout(event: Event) {
    event.preventDefault();
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
