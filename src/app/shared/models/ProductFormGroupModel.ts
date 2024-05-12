import { FormControl } from '@angular/forms';

export interface ProductFormGroupModel {
  name: FormControl<string | null>;
  description: FormControl<string | null>;
  price: FormControl<number | null>;
  imageUrl: FormControl<string | null>;
}
