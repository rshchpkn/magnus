import { Epic, ofType,  } from 'redux-observable';
import { map } from 'rxjs/operators';

import { RootActions } from '../root-actions';

import { ActionTypes as AuthActionTypes } from './actions';
import { Actions as LinkedInSignInActions } from './actions';

import { Actions as LinkedInSignInRequestActions } from '../auth-requests';

import { ActionTypes as linkedInSignInActionTypes } from '../auth-requests/nested-states/linkedin-sign-in';

export const linkendInSignInEpic: Epic<RootActions> = (action$) =>
  action$.pipe(
    ofType(AuthActionTypes.LINKEDIN_SIGN_IN),
    map(({payload}) => LinkedInSignInRequestActions.linkedInSignIn.action(payload)),
  );

export const linkendInSignInRequestSuccededEpic: Epic<RootActions> = (action$) =>
  action$.pipe(
    ofType(linkedInSignInActionTypes.ACTION_SUCCEEDED),
    map(({payload}) => LinkedInSignInActions.linkedInSignInSucceded(payload)),
  );


export const userProfileEpics = [
  linkendInSignInEpic,
  linkendInSignInRequestSuccededEpic,
];