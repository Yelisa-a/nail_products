import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../shared/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginFormGroup: FormGroup;

  public loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.initFormGroup();
  }

  async login() {
    this.loading = true;

    this.authService
      .login(
        this.loginFormGroup.value.email,
        this.loginFormGroup.value.password
      )
      .then((cred) => {
        console.log(cred);
        this.router.navigateByUrl('/main');
        this.loading = false;
      })
      .catch((error) => {
        console.error(error);
        this.loading = false;
      });
  }

  private initFormGroup(): void {
    this.loginFormGroup = this.fb.group({
      email: this.fb.control(null, Validators.required),
      password: this.fb.control(null, Validators.required),
    });
  }
}
