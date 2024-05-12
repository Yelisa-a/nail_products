import { CommonModule, CurrencyPipe } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatOptionModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { CustomCurrencyPipe } from '../../shared/pipes/custom-currency.pipe';
import { ProductEditDialogComponent } from './product-edit-dialog/product-edit-dialog.component';
import { ProductsComponent } from './products-main/products.component';
import { ProductsRoutingModule } from './products-routing.module';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [ProductsComponent, ProductEditDialogComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MatCardModule,
    CustomCurrencyPipe,
    MatDialogModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatTooltipModule,
  ],
  providers: [CurrencyPipe],
})
export class ProductsModule {}
