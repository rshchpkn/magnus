import { createSelector } from 'reselect';

import { RootState } from '../store';
import { UserState } from './state';

export const getUserState = (state: RootState) => state.user;

export const getCurrentUser = createSelector(
  getUserState,
  (state: UserState) => state.currentUserId && state.entities[state.currentUserId],
);
