import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { User } from '../../../shared/models/User';
import { AuthService } from '../../../shared/services/auth/auth.service';
import { UserService } from '../../../shared/services/user/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  public signUpForm: FormGroup;

  public firstnameControl: FormControl;
  public lastnameControl: FormControl;

  constructor(
    private fb: FormBuilder,
    private location: Location,
    private authService: AuthService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.initFormGroup();
  }

  onSubmit() {
    console.log(this.signUpForm.value);
    this.authService
      .signup(this.signUpForm.value.email, this.signUpForm.value.password)
      .then((cred) => {
        console.log(cred);
        const user: User = {
          id: cred.user?.uid as string,
          email: this.signUpForm.value.email,
          username: this.signUpForm.value.email.split('@')[0],
          name: {
            firstname: this.signUpForm.value.name.firstname,
            lastname: this.signUpForm.value.name.lastname,
          },
        };
        this.userService
          .create(user)
          .then(() => {
            console.log('User added successfully.');
          })
          .catch((error) => {
            console.error(error);
          });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  goBack() {
    this.location.back();
  }

  private initFormGroup(): void {
    this.signUpForm = this.fb.group({
      email: this.fb.control(null, Validators.required),
      password: this.fb.control(null, Validators.required),
      rePassword: this.fb.control(null, Validators.required),
      name: this.fb.group({
        firstname: this.fb.control(null, Validators.required),
        lastname: this.fb.control(null, Validators.required),
      }),
    });

    this.firstnameControl = this.signUpForm.get(
      'name.firstname'
    ) as FormControl;
    this.lastnameControl = this.signUpForm.get('name.lastname') as FormControl;
  }
}
