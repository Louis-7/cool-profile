import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ScrollBoardComponent } from './scroll-board/scroll-board.component';
import { NavComponent } from './nav/nav.component';

// import angular material components
import { OwnAngularMaterialModule } from '../shared/own-angular-material/own-angular-material.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    OwnAngularMaterialModule
  ],
  declarations: [ScrollBoardComponent, NavComponent],
  exports: [ScrollBoardComponent, NavComponent],
})
export class CoreModule { }
