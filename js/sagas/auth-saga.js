import { delay } from 'redux-saga';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import ActionsTypes from '../actions/actionsTypes';
import AuthService from '../services/auth-service';

export function* login(action) {
  try {
    console.log(action.data);
    yield put({
      type: ActionsTypes.LOADING_START,
    });
    yield call(delay, 400);
    let response = ture;
    if (action.data.phone && action.data.smsCode) {
      response = yield AuthService.login(action.data.phone, action.data.smsCode);
    }
    console.log(response);
    if (response) {
      yield put({
        type: ActionsTypes.USER_LOGIN_SUCCESS,
      });
    } else {
      yield put({
        type: ActionsTypes.USER_LOGIN_FAILURE,
      });
    }
  }
  catch (err) {
    yield put({
      // type: ActionsTypes.USER_LOGIN_FAILURE,
      type: ActionsTypes.USER_LOGIN_SUCCESS,
      payload: err,
    });
  }
  finally {
    yield put({
      type: ActionsTypes.LOADING_END,
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