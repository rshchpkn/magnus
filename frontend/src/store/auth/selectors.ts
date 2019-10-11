import { createSelector } from 'reselect';

import { RootState } from '../store';
import { AsyncActionState } from '../utils/async-action-helper';

export const linkedInSignInRequestState = (state: RootState) => state.authRequests.linkedInSignInRequest;

export const linkedInSignInLoading = createSelector(
  linkedInSignInRequestState,
  (state: AsyncActionState) => state.loading,
);
