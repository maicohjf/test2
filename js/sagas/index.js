import { all, fork } from 'redux-saga/effects';

import authSaga from './auth-saga';
import commonSaga from './common-saga';
import homeSaga from './home-saga';

export default function* root() {
  yield all([
    fork(authSaga),
    fork(commonSaga),
    fork(homeSaga),
  ]);
}