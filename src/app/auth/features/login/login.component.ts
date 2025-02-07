import { Component, inject, OnDestroy, signal } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { LoginService } from './services/login.service';
import {
  LoginPayloadInterface,
  LoginResInterface,
} from './data-access/login.models';
import { Subscription, tap } from 'rxjs';
import { Router } from '@angular/router';
import { PAGE_PATH } from '../../../app.routes';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  providers: [LoginService],
})
export class LoginComponent implements OnDestroy {
  private readonly loginService = inject(LoginService);
  private readonly router = inject(Router);
  user = signal<LoginResInterface | null>(null);
  message = signal('');

  subs = new Subscription();

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  loginForm = new FormGroup({
    username: new FormControl('', { validators: [Validators.required] }),
    password: new FormControl('', { validators: [Validators.required] }),
  });

  submit() {
    if (this.loginForm.valid) {
      this.subs.add(
        this.loginService
          .loginUser(this.loginForm.value as LoginPayloadInterface)
          .pipe(
            tap(() => {
              setTimeout(() => {
                this.router.navigate([PAGE_PATH.HOME]);
              }, 8000);
            })
          )
          .subscribe({
            next: (data) => {
              this.user.set(data);
            },
            error: (err) => {
              console.log(err);

              this.message.set(err?.message);
            },
          })
      );
    }
  }
}
