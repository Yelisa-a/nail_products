import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customCurrency',
  pure: true,
  standalone: true,
})
export class CustomCurrencyPipe implements PipeTransform {
  transform(value: number): string {
    if (typeof value !== 'number' || isNaN(value)) return '-';

    return new Intl.NumberFormat('hu-HU', {
      style: 'currency',
      currency: 'HUF',
    }).format(value);
  }
}
