import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ContactComponent } from './contact-main/contact.component';
import { ContactRoutingModule } from './contact-routing.module';

@NgModule({
  declarations: [ContactComponent],
  imports: [CommonModule, ContactRoutingModule, MatCardModule, MatIconModule],
})
export class ContactModule {}
