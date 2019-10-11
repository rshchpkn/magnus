import { combineEpics } from 'redux-observable';

import { userProfileEpics } from './auth/epics';
import { getUserProfileEpics } from './auth-requests';

const rootEpic = combineEpics(
  ...Object.values(userProfileEpics),
  ...Object.values(getUserProfileEpics),
);

export default rootEpic;