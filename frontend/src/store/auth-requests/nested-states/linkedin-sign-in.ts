import { Epic } from 'redux-observable';
import { Action } from 'typesafe-actions';

import { Observable } from 'rxjs';

import { User } from '../../../shared/interfaces/user';

import { asyncActionHandlerFactory } from '../../utils/async-action-helper';

import { authRequestsService } from '../service';

const { effect, reducer, ActionTypes, Actions } = asyncActionHandlerFactory<{code: string, redirectUri: string}, User, Error>('LINKEDIN_SIGN_IN_REQUEST');

const epic: Epic = (actions$: Observable<Action>) => effect(actions$, (payload: {code: string, redirectUri: string}) => {
  return authRequestsService.linkedinSignIn(payload);
});

export { epic, reducer, Actions, ActionTypes };
