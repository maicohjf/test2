import { combineReducers } from 'redux';

import { nav } from './nav';
import { auth } from './auth';
import { common } from './common';
import { home } from './home';

const AppReducer = combineReducers({
  nav,
  common,
  auth,
  home,
});

export default AppReducer;
