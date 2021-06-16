
import { AppState } from 'src/app/store';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { UserTask } from 'src/app/store/models';
import { Observable } from 'rxjs';
import { selectAllUserTasks } from 'src/app/store/selectors';
import * as UserTaskActions from 'src/app/store/actions';

@Component({
  selector: 'app-user-tasks',
  templateUrl: './user-tasks.component.html',
  styleUrls: ['./user-tasks.component.scss']
})
export class UserTasksComponent implements OnInit{

  userTasks$: Observable<UserTask[]>;

  constructor(
    private store:Store<AppState>
  ) { }


  ngOnInit(): void {
    this.store.dispatch(UserTaskActions.loadUserTasks());

    this.userTasks$ = this.store.select(selectAllUserTasks);
  }



}
