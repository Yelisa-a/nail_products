import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SuccessfulRoutingModule } from './successful-routing.module';
import { SuccessfulComponent } from './successful.component';

@NgModule({
  declarations: [SuccessfulComponent],
  imports: [CommonModule, SuccessfulRoutingModule],
})
export class SuccessfulModule {}
