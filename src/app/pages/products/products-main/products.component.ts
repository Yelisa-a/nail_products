import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription, lastValueFrom, tap } from 'rxjs';
import { Product } from '../../../shared/models/Product';
import { AuthService } from '../../../shared/services/auth/auth.service';
import { ProductService } from '../../../shared/services/product/product.service';
import { ProductEditDialogComponent } from '../product-edit-dialog/product-edit-dialog.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit, OnDestroy {
  public nailProducts: Product[];

  public isAdminUserLoggedIn: boolean = false;

  private dialogSubscription: Subscription;

  constructor(
    private dialog: MatDialog,
    private authService: AuthService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.init();
    this.setIsAdminUserLoggedIn();
  }

  ngOnDestroy(): void {
    this.dialogSubscription?.unsubscribe();
  }

  openDialog(product?: Product): void {
    const dialogRef = this.dialog.open(ProductEditDialogComponent, {
      data: product,
    });

    this.dialogSubscription = dialogRef.afterClosed().subscribe((value) => {
      if (!!product)
        this.productService
          .update(value)
          .then(() => {
            console.log('Product updated successfully.');
          })
          .catch((error) => {
            console.error(error);
          });
      else
        this.productService
          .create(value)
          .then(() => {
            console.log('Product created successfully.');
          })
          .catch((error) => {
            console.error(error);
          });
    });
  }

  deleteProduct(productId: string): void {
    this.productService
      .delete(productId)
      .then(() => {
        console.log('Product deleted successfully.');
      })
      .catch((error) => {
        console.error(error);
      });
  }

  private async init(): Promise<void> {
    await lastValueFrom(
      this.productService.getAll().pipe(
        tap((values) => {
          this.nailProducts = values;
        })
      )
    );
  }

  private async setIsAdminUserLoggedIn(): Promise<void> {
    await lastValueFrom(
      this.authService.isAdminUserLoggedIn().pipe(
        tap((value) => {
          this.isAdminUserLoggedIn = value;
        })
      )
    );
  }
}
