import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/guards/auth.guard';
import { urls } from './shared/urls';

// lazy-loading
const routes: Routes = [
  {
    path: '',
    redirectTo: '/' + urls.LOGIN,
    pathMatch: 'full',
  },
  {
    path: urls.MAIN,
    loadChildren: () =>
      import('./pages/main/main.module').then((m) => m.MainModule),
    canActivate: [AuthGuard],
  },
  {
    path: urls.PRODUCTS,
    loadChildren: () =>
      import('./pages/products/products.module').then((m) => m.ProductsModule),
    canActivate: [AuthGuard],
  },
  {
    path: urls.CONTACT,
    loadChildren: () =>
      import('./pages/contact/contact.module').then((m) => m.ContactModule),
  },
  {
    path: urls.NOT_FOUND,
    loadChildren: () =>
      import('./pages/not-found/not-found.module').then(
        (m) => m.NotFoundModule
      ),
  },
  {
    path: urls.LOGIN,
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: urls.SIGNUP,
    loadChildren: () =>
      import('./pages/signup/signup.module').then((m) => m.SignupModule),
  },
  {
    path: '**',
    redirectTo: '/' + urls.NOT_FOUND,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
