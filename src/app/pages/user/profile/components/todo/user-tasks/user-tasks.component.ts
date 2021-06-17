
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

  userTasks: UserTask[] = [];

  filteredTasks: UserTask[] = [];

  constructor(
    private store:Store<AppState>
  ) { }


  ngOnInit(): void {
    this.store.dispatch(UserTaskActions.loadUserTasks());

    this.store.select(selectAllUserTasks)
      .subscribe((items) => {
        this.userTasks = items;
        this.filteredTasks = items;
        // this.filteredTasks = this.sortTasks(this.filteredTasks);

      });
  }

  filterTasks(filterStr: string) {
    console.log("Filter term: ", filterStr);
    // filterStr = filterStr.toLowerCase();
    console.log("Lowercase Filter term: ", filterStr);
    this.filteredTasks = this.userTasks.filter(
      (item) => item.title.toLowerCase().search(filterStr.toLowerCase()) > -1
    );

    // this.filteredTasks = this.sortTasks(this.filteredTasks);
  }

  // sortTasks(_tasks: UserTask[]): UserTask[] {
  //   return _tasks.sort(
  //     (a, b) => <number>new Number(a.isComplete) - <number>new Number(b.isComplete)
  //   );
  // }

}
