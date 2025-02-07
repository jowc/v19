import { Injectable } from '@angular/core';
import {
  LoggedInUser,
  LoginPayloadInterface,
  LoginResInterface,
} from '../data-access/login.models';
import { map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'any',
})
export class LoginService {
  loginUser({
    username,
  }: LoginPayloadInterface): Observable<LoginResInterface> {
    return of(username).pipe(
      map((username) => {
        if (username !== 'joe') {
          throw new Error('wrong credentials');
        }
        return LoggedInUser;
      })
    );
  }
}
