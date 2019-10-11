import { ActionType } from 'typesafe-actions';
import { ActionTypeUnion as UserProfileActionTypeUnion } from './auth/actions';
import { ActionTypeUnion as GetUserProfileActionTypeUnion } from './auth-requests';

export type RootActions = ActionType<
  | UserProfileActionTypeUnion
  | GetUserProfileActionTypeUnion
  >;