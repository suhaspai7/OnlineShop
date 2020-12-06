import { reducer as offlineQueue } from 'redux-queue-offline';
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import userNameReducer from './User';

const rootReducer = combineReducers({
  offlineQueue,
  userName: userNameReducer,

});
export default rootReducer;
