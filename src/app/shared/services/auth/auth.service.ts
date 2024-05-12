import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private adminUserEmail: string = 'asd@asd.com';

  constructor(private auth: AngularFireAuth) {}

  login(email: string, password: string) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  signup(email: string, password: string) {
    return this.auth.createUserWithEmailAndPassword(email, password);
  }

  isUserLoggedIn() {
    return this.auth.user;
  }

  isAdminUserLoggedIn(): Observable<boolean> {
    return this.isUserLoggedIn().pipe(
      map((value) => {
        return value?.email === this.adminUserEmail;
      })
    );
  }

  logout() {
    return this.auth.signOut();
  }
}
