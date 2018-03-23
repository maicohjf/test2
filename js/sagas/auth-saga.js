import { delay } from 'redux-saga';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import ActionsTypes from '../actions/actionsTypes';

export function* login(action) {
  try {
    console.log(action.data);
    yield put({
      type: ActionsTypes.LOADING_START,
    });
    yield call(delay, 400);
    yield put({
      type: ActionsTypes.USER_LOGIN_SUCCESS,
    });
    yield put({
      type: ActionsTypes.LOADING_END,
    });
  }
  catch (err) {
    yield put({
      type: ActionsTypes.USER_LOGIN_FAILURE,
      payload: err,
    });
  }
}

export function* logout() {
  try {
    yield call(delay, 200);

    yield put({
      type: ActionsTypes.USER_LOGOUT_SUCCESS,
    });
  }
  catch (err) {
    yield put({
      type: ActionsTypes.USER_LOGOUT_FAILURE,
      payload: err,
    });
  }
}

export default function* root() {
  yield all([
    takeLatest(ActionsTypes.USER_LOGIN_REQUEST, login),
    takeLatest(ActionsTypes.USER_LOGOUT_REQUEST, logout),
  ]);
}