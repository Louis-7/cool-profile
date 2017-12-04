import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    MatStepperModule
  ],
  exports: [
    MatButtonModule,
    MatStepperModule,
    MatIconModule
  ],
  declarations: []
})
export class OwnAngularMaterialModule { }
