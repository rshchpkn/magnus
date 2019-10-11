import { combineReducers } from 'redux';

import { ActionType, StateType } from 'typesafe-actions';


import {
  Actions as linkedInSignIn,
  ActionTypes as linkedInSignInActionTypes,
  epic as linkedInSignInEpic,
  reducer as linkedInSignInReducer,
} from './nested-states/linkedin-sign-in';

export const Actions = {
  linkedInSignIn,
};

export const ActionTypes = {
  linkedInSignInActionTypes,
};

export const reducer = combineReducers({
  linkedInSignInRequest: linkedInSignInReducer,
});

export const getUserProfileEpics = [
  linkedInSignInEpic,
];

export type ActionTypeUnion = ActionType<typeof reducer>;
export type State = StateType<typeof reducer>;
