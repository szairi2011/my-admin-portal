import { mergeMap, catchError, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as UserInfoActions from 'src/app/store/actions/user-info.actions';
import { AuthService } from 'src/app/pages/auth/services';
import { of } from 'rxjs';



@Injectable()
export class UserInfoEffects {

  constructor(
    private actions$: Actions,
    private authService: AuthService) { }

  addUserInfoEffect = createEffect(
    () => this.actions$.pipe(
      ofType(UserInfoActions.addUserInfo),
      mergeMap(
        (data) => this.authService.signup(data.userInfo)
          .pipe(
            map(() => UserInfoActions.addUserInfoSuccess(data)),
            catchError((error: Error) => of(UserInfoActions.addUserInfoFailure({ error: error })))
          )
      )
    )
  );

  authenticateUserEffect = createEffect(
    () => this.actions$.pipe(
      ofType(UserInfoActions.authenticateUserAction),
      mergeMap(
        (creds) => this.authService.login(creds)
          .pipe(
            map(
              (user) => {
                console.log('Logged in user info from user action success: ', user);
                return UserInfoActions.authenticateUserActionSuccess({ loggedInUser: user })
              }
            ),
            catchError(
              (error: Error) => {
                console.log('Login failure with error: ', error);
                return of( UserInfoActions.authenticateUserActionFailure({ error: error }) );
              }
            )
          )
      )
    )
  );

}
