import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { UserInfo } from '../models/user-info.model';

export const loadUserInfos = createAction(
  '[UserInfo/API] Load UserInfos',
  props<{ userInfos: UserInfo[] }>()
);

// Create a new user actions including success and failure
export const addUserInfo = createAction(
  '[UserInfo/API] Add UserInfo',
  props<{ userInfo: UserInfo }>()
);

export const addUserInfoSuccess = createAction(
  '[UserInfo/API] Add UserInfo success',
  props<{ userInfo: UserInfo }>()
);

export const addUserInfoFailure = createAction(
  '[UserInfo/API] Add UserInfo failure',
  props<{ error: Error }>()
);


//
export const upsertUserInfo = createAction(
  '[UserInfo/API] Upsert UserInfo',
  props<{ userInfo: UserInfo }>()
);

export const addUserInfos = createAction(
  '[UserInfo/API] Add UserInfos',
  props<{ userInfos: UserInfo[] }>()
);

export const upsertUserInfos = createAction(
  '[UserInfo/API] Upsert UserInfos',
  props<{ userInfos: UserInfo[] }>()
);

export const updateUserInfo = createAction(
  '[UserInfo/API] Update UserInfo',
  props<{ userInfo: Update<UserInfo> }>()
);

export const updateUserInfos = createAction(
  '[UserInfo/API] Update UserInfos',
  props<{ userInfos: Update<UserInfo>[] }>()
);

export const deleteUserInfo = createAction(
  '[UserInfo/API] Delete UserInfo',
  props<{ id: string }>()
);

export const deleteUserInfos = createAction(
  '[UserInfo/API] Delete UserInfos',
  props<{ ids: string[] }>()
);

export const clearUserInfos = createAction(
  '[UserInfo/API] Clear UserInfos'
);

// Authenticate user actions including success and failure
export const authenticateUserAction = createAction(
  '[UserInfo/API] Authenticate User',
  props<{
    username: string;
    password: string;
  }>()
);

export const authenticateUserActionSuccess = createAction(
  '[UserInfo/API] Authenticate User Success',
  props<{
    loggedInUser: UserInfo;
  }>()
);

export const authenticateUserActionFailure = createAction(
  '[UserInfo/API] Authenticate User failure',
  props<{error: Error}>()
);
