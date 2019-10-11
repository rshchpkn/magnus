import { ActionTypes, ActionTypeUnion } from './actions';
import { AuthState } from './state';

export const initialState: AuthState = {
  isAuthorized: false,
};

export function reducer(state = initialState, action: ActionTypeUnion): AuthState {
  switch (action.type) {

    case ActionTypes.LINKEDIN_SIGN_IN_SUCCEDED: {
      return {
        ...state,
        isAuthorized: true,
      };
    }

    default:
      return state;
  }
}