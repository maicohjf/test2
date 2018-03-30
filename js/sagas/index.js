import { all, fork } from 'redux-saga/effects';

import authSaga from './auth-saga';
import commonSaga from './common-saga';

export default function* root() {
  yield all([
    fork(authSaga),
    fork(commonSaga),
  ]);
}