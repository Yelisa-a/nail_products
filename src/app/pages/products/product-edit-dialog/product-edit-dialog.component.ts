import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { images } from '../../../shared/constants/images';
import { Product } from '../../../shared/models/Product';

@Component({
  selector: 'app-product-edit-dialog',
  templateUrl: './product-edit-dialog.component.html',
  styleUrl: './product-edit-dialog.component.scss',
})
export class ProductEditDialogComponent implements OnInit {
  public productFormGroup: FormGroup;
  public images = images;

  constructor(
    @Inject(MAT_DIALOG_DATA) public product: Product,
    public dialogRef: MatDialogRef<ProductEditDialogComponent>,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.initFormGroup();
  }

  onSubmit(): void {
    this.dialogRef.close({ ...this.product, ...this.productFormGroup.value });
  }

  private initFormGroup(): void {
    this.productFormGroup = this.fb.group({
      name: this.fb.control(null, Validators.required),
      description: this.fb.control(null),
      price: this.fb.control(null, Validators.required),
      imageUrl: this.fb.control(null),
    });

    if (this.product) this.productFormGroup.patchValue(this.product);
  }
}
