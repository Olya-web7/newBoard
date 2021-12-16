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

const routes = [
  { path: '', component: HomepageComponent }
];

@NgModule({
  declarations: [
    HomepageComponent,
    TasksComponent
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
    FormsModule
  ],
  exports: [
    HomepageComponent
  ]
})
export class HomepageModule { }
