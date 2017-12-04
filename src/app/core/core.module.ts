import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollBoardComponent } from './scroll-board/scroll-board.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ScrollBoardComponent],
  exports: [ScrollBoardComponent],
})
export class CoreModule { }
