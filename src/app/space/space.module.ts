import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpaceRoutingModule } from './space-routing.module';
import { MegaComponent } from './mega/mega.component';
import { AlphaComponent } from './alpha/alpha.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    SpaceRoutingModule,
    CoreModule
  ],
  declarations: [MegaComponent, AlphaComponent]
})
export class SpaceModule { }
