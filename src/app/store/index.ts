import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromUserTask from './reducers/user-task.reducer';

export interface AppState {

  [fromUserTask.userTasksFeatureKey]: fromUserTask.UserTaskState;
}

export const reducers: ActionReducerMap<AppState> = {

  [fromUserTask.userTasksFeatureKey]: fromUserTask.reducer,
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
