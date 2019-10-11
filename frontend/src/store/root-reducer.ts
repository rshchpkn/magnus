import { combineReducers } from 'redux';

import { reducer as AuthReducer } from './auth/reducer';
import { reducer as UserReducer } from './user/reducer';
import { reducer as AuthRequestsReducer } from './auth-requests';

const rootReducer = combineReducers({
  auth: AuthReducer,
  user: UserReducer,
  authRequests: AuthRequestsReducer,
});

export default rootReducer;
