import { Update } from '@ngrx/entity';
import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { updateUserTask } from 'src/app/store/actions';
import { UserTask } from 'src/app/store/models';

@Component({
  selector: 'app-user-task-actions-menu',
  templateUrl: './user-task-actions-menu.component.html',
  styleUrls: ['./user-task-actions-menu.component.scss']
})
export class UserTaskActionsMenuComponent implements OnInit {

  @Input() task: UserTask;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
  }

  completeTask(t: UserTask) {
    const toggleComplete: Update<UserTask> = {
      id: this.task.id as string,
      changes: {isComplete: true}
    };

    this.store.dispatch( updateUserTask({ userTask: toggleComplete }) );
  }

  reactivateTask(task: UserTask) {
    const togglePending: Update<UserTask> = {
      id: task.id as string,
      changes: { isComplete: false }
    };

    this.store.dispatch( updateUserTask({userTask: togglePending}) )
  }

}
