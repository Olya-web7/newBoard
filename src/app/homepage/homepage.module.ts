import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';

import { DialogModule } from '../components/dialog/dialog.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AppRoutingModule } from '../app-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
    HomepageComponent
  ],
  imports: [
    CommonModule,    
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    DialogModule,
    DragDropModule,
    AppRoutingModule
  ],
  exports: [
    HomepageComponent
  ]
})
export class HomepageModule { }
