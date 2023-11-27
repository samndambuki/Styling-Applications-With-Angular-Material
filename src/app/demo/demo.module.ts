import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

import { MaterialModule } from '../shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { FlexboxComponent } from './flexbox/flexbox.component';
import { DemoRoutingModule } from './demo-routing.module';
import { ButtonsComponent } from './buttons/buttons.component';

@NgModule({
  declarations: [ButtonsComponent, FlexboxComponent],
  imports: [MaterialModule, DemoRoutingModule, FormsModule, FlexLayoutModule],
})
export class DemoModule {}
