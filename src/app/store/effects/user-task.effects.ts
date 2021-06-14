import { UserTask } from 'src/app/store/models';
import { Update } from '@ngrx/entity';
import { mergeMap, catchError, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import * as UserTaskActions from '../actions/user-task.actions';
import { UserTaskService } from 'src/app/pages/user/profile/services';
import { of } from 'rxjs';
import { stringify } from '@angular/compiler/src/util';


@Injectable()
export class UserTaskEffects {

  constructor(
    private actions$: Actions,
    private userTaskService: UserTaskService
    ) { }

  loadUserTasksEffect = createEffect(
    () => this.actions$.pipe(
      ofType(UserTaskActions.loadUserTasks),
      mergeMap(
        () => this.userTaskService.loadUserTasks()
          .pipe(
            map( (data) => {
              {console.log("First loaded user task title: " + stringify(data[0].title));
              return UserTaskActions.loadUserTasksSuccess( {userTasks: data} ); }
            } ),
            catchError( error => of( UserTaskActions.loadUserTasksFailure( error ) ) )
          )
      )
    )
  );

  updateUserTaskEffect = createEffect(
    () => this.actions$.pipe(
      ofType(UserTaskActions.updateUserTask),
      mergeMap(
        (data) => this.userTaskService.updateUserTask(data.userTask)
        .pipe(
          map( () => UserTaskActions.updateUserTaskSuccess( data ) ),
          catchError( error => of( UserTaskActions.updateUserTaskFailure( error ) ) )
        )
      )
    )
  );

}
