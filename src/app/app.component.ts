import { Component, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { NavigationEnd, Router } from '@angular/router';
import { catchError, filter, lastValueFrom, tap, throwError } from 'rxjs';
import { AuthService } from './shared/services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  page = '';
  routes: Array<string> = [];
  loggedInUser?: firebase.default.User | null;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    this.setCurrentPage();
    this.setLoggedInUser();
  }

  onToggleSidenav(sidenav: MatSidenav) {
    sidenav.toggle();
  }

  onClose(event: any, sidenav: MatSidenav) {
    if (event === true) {
      sidenav.close();
    }
  }

  logout() {
    this.authService
      .logout()
      .then(() => {
        console.log('Logged out successfully.');
      })
      .catch((error) => {
        console.error(error);
      });
  }

  private async setCurrentPage(): Promise<void> {
    this.routes = this.router.config.map((conf) => conf.path) as string[];
    await lastValueFrom(
      this.router.events.pipe(
        filter((event) => event instanceof NavigationEnd),
        tap((evts: any) => {
          const currentPage = (evts.urlAfterRedirects as string).split(
            '/'
          )[1] as string;
          if (this.routes.includes(currentPage)) {
            this.page = currentPage;
          }
        })
      )
    );
  }

  private async setLoggedInUser(): Promise<void> {
    await lastValueFrom(
      this.authService.isUserLoggedIn().pipe(
        tap((user) => {
          console.log(user);
          this.loggedInUser = user;
          localStorage.setItem('user', JSON.stringify(this.loggedInUser));
        }),
        catchError((error) => {
          console.error(error);
          localStorage.removeItem('user');
          return throwError(() => new Error(error));
        })
      )
    );
  }
}
