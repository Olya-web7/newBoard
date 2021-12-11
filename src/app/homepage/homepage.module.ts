import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageComponent } from './homepage.component';
import { DialogModule } from '../components/dialog/dialog.module';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    HomepageComponent
  ],
  imports: [
    CommonModule,    
    DialogModule,
    DragDropModule
  ],
  exports: [
    HomepageComponent
  ]
})
export class HomepageModule { }
