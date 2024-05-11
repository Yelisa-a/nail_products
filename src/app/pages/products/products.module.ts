import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ProductsComponent } from './products-main/products.component';
import { ProductsRoutingModule } from './products-routing.module';

@NgModule({
  declarations: [ProductsComponent],
  imports: [CommonModule, ProductsRoutingModule],
})
export class ProductsModule {}
