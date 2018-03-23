import { combineReducers } from 'redux';

import { nav } from './nav';
import { auth } from './auth';
import { common } from './common';

const AppReducer = combineReducers({
  nav,
  common,
  auth,
});

export default AppReducer;
