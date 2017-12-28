import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwnAngularMaterialModule } from './own-angular-material/own-angular-material.module';

import { ThreeDrawService } from './three-draw/three-draw.service';
import { ParticlesService } from './particles/particles.service';

@NgModule({
  imports: [
    CommonModule,
    OwnAngularMaterialModule
  ],
  declarations: [],
  providers: [ThreeDrawService, ParticlesService],
  exports: [CommonModule, OwnAngularMaterialModule],
})
export class SharedModule { }
