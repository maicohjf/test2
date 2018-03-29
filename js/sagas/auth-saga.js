import { delay } from 'redux-saga';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import ActionsTypes from '../actions/actionsTypes';
import AuthService from '../services/auth-service';
import DeviceStorage from '../utils/deviceStorage';
import Errors from '../constants/errors';

export function* login(action) {
  try {
    yield put({
      type: ActionsTypes.LOADING_START,
    });
    let response = false;
    if (action.data.phone && action.data.smsCode) {
      response = yield AuthService.login(action.data.phone, action.data.smsCode);
    }
    console.log(response);
    if (response && response.code === 0) {
      if (response.data && response.data.token) {
        DeviceStorage.save('authtokenq', response.data.token);
      }
      yield put({
        type: ActionsTypes.USER_LOGIN_SUCCESS,
      });
    } else if (response && response.code) {
      yield put({
        errMsg: Errors[response.code] || response.message,
        type: ActionsTypes.USER_LOGIN_FAILURE,
      });
    }
  }
  catch (err) {
    console.log(err);
    yield put({
      type: ActionsTypes.USER_LOGIN_FAILURE,
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