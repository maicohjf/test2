/**
 * Created by liyanxi on 4/9/18.
 */

import {all, call, put, takeLatest} from 'redux-saga/effects';

import ActionsTypes from '../actions/actionsTypes';
import api from '../constants/api';
import {request} from '../utils/request';


export function* fetchHomeData() {
  try {
    const res = yield call(request, api.home, {
      method: 'GET'
    });
    if (res && res.code === 0) {
      yield put({
        type: ActionsTypes.HOME_DATA_FETCH_SUCCESS,
        homeData: res.data
      })
    } else {
      yield put({
        type: ActionsTypes.COMMON_FAILURE,
        errMsg: res.message
      })
    }
  } catch (err) {
    yield put({
      type: ActionsTypes.COMMON_FAILURE,
      errMsg: err
    })
  }
}

export default function* root() {
  yield all([
    takeLatest(ActionsTypes.HOME_DATA_FETCH_REQUEST, fetchHomeData),
  ]);
}