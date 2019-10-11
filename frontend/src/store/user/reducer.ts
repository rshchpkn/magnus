import { ActionTypes, ActionTypeUnion } from '../auth/actions';
import { UserState } from './state';

export const initialState: UserState = {
  currentUserId: null,
  entities: {},
};

export function reducer(state = initialState, {payload, type}: ActionTypeUnion): UserState {
  switch (type) {

    case ActionTypes.LINKEDIN_SIGN_IN_SUCCEDED: {
      return {
        ...state,
        currentUserId: payload._id,
        entities: {
          ...state.entities,
          [payload._id]: payload
        }
      };
    }

    default:
      return state;
  }
}