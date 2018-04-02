import { delay } from 'redux-saga';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import ActionsTypes from '../actions/actionsTypes';

import api from '../constants/api';
import { request } from '../utils/request';
import { withLoading } from './saga-helper';
import dbUtil from '../utils/db';

export function* fetchDict() {
  try {
    const res = yield call(request, api.dict, {
      method: 'get',
    });
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

export function* fetchArea() {
  try {
    const res = yield call(request, api.area, {
      method: 'get',
    });
    yield put({
      type: ActionsTypes.AREA_FETCH_SUCCESS,
      dict: res.data.dict,
    });
  }
  catch (err) {
    yield put({
      type: ActionsTypes.AREA_FETCH_FAILURE,
      payload: err,
    });
  }
}

export function* fetchCommon() {
  try {
    // const resDict = yield call(request, api.dict, {
    //   method: 'get',
    // });
    // const resArea = yield call(request, api.area, {
    //   method: 'get',
    // });
    const [resDict, resArea] = yield [call(request, api.dict, {
      method: 'get',
    }), call(request, api.area, {
      method: 'get',
    })];
    yield put({
      type: ActionsTypes.DICT_FETCH_SUCCESS,
      dict: resDict.data.dict,
    });
    if (resArea && resArea.data && resArea.data.list && resArea.data.list.address){
      dbUtil.writeArea(resArea.data.list.address);
    }
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
    takeLatest(ActionsTypes.DICT_FETCH_REQUEST, withLoading(fetchDict)),
    takeLatest(ActionsTypes.AREA_FETCH_REQUEST, withLoading(fetchDict)),
    takeLatest(ActionsTypes.COMMON_FETCH_REQUEST, withLoading(fetchCommon)),
  ]);
}