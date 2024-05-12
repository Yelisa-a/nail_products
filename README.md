# Peer-review Checklist

- **Fordítási hiba**

  - Fordítási hiba nincs (ng serve kiadásakor nincs hiba)

- **Futtatási hiba**

  - Futtatási hiba nincs (böngésző konzol részében nincs hiba)

- **Firebase Hosting**

  - Firebase Hosting URL létezik, és minden végpont megfelelő módon betöltődik

  [https://nail-products.web.app](https://nail-products.web.app)

- **Adatmodell definiálása**

  - Legalább 4 TypeScript interfész vagy class formájában definiált adatmodell (ugyanennyi kollekció)

  ```
  # src\app\shared\models\ImagesModel.ts
  # src\app\shared\models\Product.ts
  # src\app\shared\models\ProductFOrmGroup.ts
  # src\app\shared\models\User.ts
  ```

- **Alkalmazás felbontása**

  - Megfelelő számú komponensre van felbontva az alkalmazás (egyetlen komponens TS és HTML kódja sem haladja meg a 250 sort és soronként a 400 karaktert)

- **Reszponzív, mobile-first felület**

  - Minden adat látható és jól jelenik meg böngészőben is, mobil nézetben is

- **Direktívák használata**

  - Legalább 2 különböző attribútum direktíva használata
  - Legalább 2 különböző strukturális direktíva használata

  ```
  Attribútum
  # src/app/pages/products/products-main/products.component.html line 9 *ngIf
  # src/app/pages/products/product-edit-dialog/product-edit-dialog.component.html line 5 [formGroup]
  Struktúrális
  # src/app/pages/products/product-edit-dialog/product-edit-dialog.component.html line 5 (ngSubmit)
  # src/app/pages/products/products-main/products.component.html line 18 *ngFor
  ```

- **Adatátadás komponensek között**

  - Legalább 1 @Input és 1 @Output használata az adatátadásra szülő és gyermek komponensek között

  ```
  @Input
  # src/app/shared/menu/menu.component.ts line 9 @Input() currentPage
  @Output
  # src/app/shared/menu/menu.component.ts line 12 @Output() onCloseSidenav
  ```

- **Material elemek használata**

  - Legalább 10 különböző Material elem helyes használata

  ```
  # mat-dialog-title: src/app/pages/products/product-edit-dialog/product-edit-dialog.component.html line 1
  # mat-dialog-content: src/app/pages/products/product-edit-dialog/product-edit-dialog.component.html line 4
  # mat-form-field: src/app/pages/products/product-edit-dialog/product-edit-dialog.component.html line 6
  # input matInput: src/app/pages/products/product-edit-dialog/product-edit-dialog.component.html line 8
  # mat-error: src/app/pages/products/product-edit-dialog/product-edit-dialog.component.html line 10
  # mat-select: src/app/pages/products/product-edit-dialog/product-edit-dialog.component.html line 18
  # mat-option: src/app/pages/products/product-edit-dialog/product-edit-dialog.component.html line 19
  # mat-sidenav-container: src/app/app.component.html line 2
  # mat-sidenav: src/app/app.component.html line 3
  # mat-sidenav-content: src/app/app.component.html line 4
  # mat-toolbar: src/app/app.component.html line 6
  ```

- **Angular form-ok használata**

  - Adatbevitel Angular form-ok segítségével megvalósítva (legalább 2 form)

  ```
  # src/app/pages/products/product-edit-dialog/product-edit-dialog.component.html
  # src/app/pages/signup/signup-main/signup.component.html
  ```

- **Pipe osztály használata**

  - Legalább 1 saját Pipe osztály írása és használata

  ```
  # src\app\shared\pipes\custom-currency.pipe.ts
  ```

- **Lifecycle Hook használata**

  - Legalább 2 különböző Lifecycle Hook használata a teljes projektben (értelmes tartalommal, nem üresen)

  ```
  # src/app/pages/products/products-main/products.component.ts line 27 ngOnInit()
  # src/app/pages/products/products-main/products.component.ts line 32 ngOnDestroy()
  ```

- **CRUD műveletek**

  - CRUD műveletek mindegyike megvalósult (Promise, Observable használattal)
  - CRUD műveletek service-ekbe vannak kiszervezve és megfelelő módon injektálva lettek

  ```
  # src\app\shared\services\product\product.service.ts
  ```

- **Firestore adatbázis használata**

  - Firestore adatbázis használata az adatokhoz (integráció, környezeti változók használata helyes legyen)
  - Legalább 2 komplex Firestore lekérdezés megvalósítása (ide tartoznak: where feltétel, rendezés, léptetés, limitálás)

- **Route-ok**

  - Legalább 4 különböző route a különböző oldalak eléréséhez
  - Legalább 2 route levédése azonosítással (AuthGuard) (ahol ennek értelme van, pl.: egy fórum témakör megtekinthető bárki számára, de a regisztrált felhasználó adatai nem)

  ```
  # src\app\app-routing.module.ts
  ```

- **Szubjektív pontozás**
  - Szubjektív pontozás a projekt egészére vonatkozólag (mennyire fedi le a projekt a témakört (mennyire kapcsolódik hozzá), mennyi lehet a befektetett energia a projektben)

# nail_products

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
