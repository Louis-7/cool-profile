import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// import angular material components
import { OwnAngularMaterialModule } from '../shared/own-angular-material/own-angular-material.module';

import { ScrollBoardComponent } from './scroll-board/scroll-board.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    OwnAngularMaterialModule
  ],
  declarations: [ScrollBoardComponent, NavComponent, FooterComponent],
  exports: [ScrollBoardComponent, NavComponent, FooterComponent],
})
export class CoreModule { }
