import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GammaRoutingModule } from './gamma-routing.module';
import { GammaComponent } from './gamma.component';


@NgModule({
  declarations: [GammaComponent],
  imports: [
    CommonModule,
    GammaRoutingModule
  ]
})
export class GammaModule { }
