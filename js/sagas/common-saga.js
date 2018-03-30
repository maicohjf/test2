import { delay } from 'redux-saga';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import ActionsTypes from '../actions/actionsTypes';
import CommonService from '../services/common-service';

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

export function* fetchDict() {
  try {
    console.log(api.dict);
    const res = yield call(request, api.dict, {
      method: 'get',
    });
    console.log(res);
    yield put({
      type: ActionsTypes.DICT_FETCH_SUCCESS,
      dict: res.data.dict,
    });
  }
  catch (err) {
    yield put({
      type: ActionsTypes.DICT_FETCH_FAILURE,
      payload: err,
    });
  }
}

export default function* root() {
  yield all([
    takeLatest(ActionsTypes.SMSCODE_SEND_REQUEST, sendSmsCode),
    takeLatest(ActionsTypes.DICT_FETCH_REQUEST, fetchDict),
  ]);
}