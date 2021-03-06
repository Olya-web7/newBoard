import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { DialogModule } from '../components/dialog/dialog.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AppRoutingModule } from '../app-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from "@angular/router";
import { TasksComponent } from './tasks/tasks.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from "@angular/forms";
import { MatDialogModule } from '@angular/material/dialog';
import { CommentComponent } from './comment/comment.component'; 

const routes = [
  { path: '', component: HomepageComponent }
];

@NgModule({
  declarations: [
    HomepageComponent,
    TasksComponent,
    CommentComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    DialogModule,
    DragDropModule,
    AppRoutingModule,
    RouterModule.forChild(routes),
    MatInputModule,
    FormsModule,
    MatDialogModule,
    DialogModule
  ],
  exports: [
    HomepageComponent
  ]
})
export class HomepageModule { }
