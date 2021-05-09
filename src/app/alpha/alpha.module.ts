import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlphaRoutingModule } from './alpha-routing.module';
import { AlphaComponent } from './alpha.component';


@NgModule({
  declarations: [AlphaComponent],
  imports: [
    CommonModule,
    AlphaRoutingModule
  ]
})
export class AlphaModule { }
