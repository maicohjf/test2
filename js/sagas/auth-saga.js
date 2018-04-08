import { delay } from 'redux-saga';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import ActionsTypes from '../actions/actionsTypes';
import DeviceStorage from '../utils/deviceStorage';
import Errors from '../constants/errors';
import { withLoading } from './saga-helper';
import api from '../constants/api';
import { request } from '../utils/request';

export function* sendSmsCode(action) {
  try {
    const res = yield call(request, api.sendSmsCode, {
      method: 'post',
      payload: {
        phone: action.data.phone,
        op: 'REGISTER'
      }
    });
    console.log(res);
    yield put({
      type: ActionsTypes.SMSCODE_SEND_SUCCESS,
    });
  }
  catch (err) {
    yield put({
      type: ActionsTypes.SMSCODE_SEND_FAILURE,
      payload: err,
    });
  }
}

export function* login(action) {
  try {
    let response = false;
    console.log(action)
    if (action.data.phone && action.data.smsCode) {
      response = yield call(request, api.login, {
        method: 'post',
        payload: {
          phone: action.data.phone,
          sms_code: action.data.smsCode,
          platform: 1,
        }
      });
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
}

export function* logout() {
  try {
    const response = yield call(request, api.logout, {
      method: 'get',
    });
    console.log(response);
    if (response && response.code === 0) {
      DeviceStorage.delete('authtokenq');
    }
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
    takeLatest(ActionsTypes.SMSCODE_SEND_REQUEST, sendSmsCode),
    takeLatest(ActionsTypes.USER_LOGIN_REQUEST, withLoading(login)),
    takeLatest(ActionsTypes.USER_LOGOUT_REQUEST, withLoading(logout)),
  ]);
}