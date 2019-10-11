import { action, ActionType } from 'typesafe-actions';
import { User } from '../../shared/interfaces/user';

export enum ActionTypes {
  LINKEDIN_SIGN_IN = 'LINKEDIN_SIGN_IN',
  LINKEDIN_SIGN_IN_SUCCEDED = 'LINKEDIN_SIGN_IN_SUCCEDED',
  LINKEDIN_SIGN_IN_FAILED = 'LINKEDIN_SIGN_IN_FAILED',
}

export const Actions = {
  linkedInSignIn: (payload: {code: string, redirectUri: string}) => action(ActionTypes.LINKEDIN_SIGN_IN, payload),
  linkedInSignInSucceded: (user: User) => action(ActionTypes.LINKEDIN_SIGN_IN_SUCCEDED, user),
  linkedInSignInFailed: (payload?: any) => action(ActionTypes.LINKEDIN_SIGN_IN_FAILED, payload),
};

export type ActionTypeUnion = ActionType<typeof Actions>;
